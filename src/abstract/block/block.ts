import { v4 as makeUUID } from 'uuid';
import * as Handlebars from 'handlebars';
import { EventBus } from '../../utils/event-bus';

export enum EVENTS {
    INIT = 'init',
    FLOW_CDM = 'flow:component-did-mount',
    FLOW_CDU = 'flow:component-did-update',
    FLOW_RENDER = 'flow:render'
}
export type eventsType = {events?: any};
export type attributesType = {attributes?: {[key: string]: any}};
type propsExtended<T> = T & eventsType & attributesType;

// Нельзя создавать экземпляр данного класса
export class Block<T extends {[key: string]: any}> {
  _element: HTMLElement | null = null;

  _tagName: string;

  props: propsExtended<T>;

  children: any;

  __id: string;

  eventBus: () => EventBus;

  constructor(propsAndChildren: propsExtended<T>, tagName = 'div') {
    const eventBus = new EventBus();

    this._tagName = tagName;

    this.__id = makeUUID();

    const { children, props } = this._getChildren(propsAndChildren);

    this.children = this._makeChildrenProxy(children);
    this.props = this._makePropsProxy({ ...props, __id: this.__id });

    this.eventBus = () => eventBus;
    this._registerEvents(this.eventBus());
    this.eventBus().emit(EVENTS.INIT);
  }

  _getChildren(propsAndChildren: any) {
    const children: any = {};
    const props: any = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      const isValueBlockInstance = value instanceof Block;
      const isValueArrayOfBlockInstances = Array.isArray(value)
          && value.every((v) => v instanceof Block) && value.length > 0;

      const isBlockInstance = isValueBlockInstance || isValueArrayOfBlockInstances;

      if (isBlockInstance) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  compile(template: string, props: any) {
    const propsAndStubs = { ...props };

    const id = makeUUID();

    Object.entries(this.children).forEach(([key, child]: [string, any]) => {
      if (Array.isArray(child)) {
        propsAndStubs[key] = `<div data-id="${id}"></div>`;
      } else {
        propsAndStubs[key] = `<div data-id="${child.__id}"></div>`;
      }
    });

    const fragment = document.createElement('template');

    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this.children).forEach((child: any) => {
      if (Array.isArray(child)) {
        const stub = fragment.content.querySelector(`[data-id="${id}"]`);

        if (stub) {
          const allContent = child.map((c) => c.getContent() as HTMLElement);
          stub.replaceWith(...allContent);
        }
      } else {
        const stub = fragment.content.querySelector(`[data-id="${child.__id}"]`);

        if (stub) {
          stub.replaceWith(child.getContent());
        }
      }
    });

    return fragment.content;
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    this._element = this._createDocumentElement();
  }

  init() {
    this._createResources();
    this.eventBus().emit(EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {
    // console.log(oldProps);
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: any, newProps: any) {
    const isNeedReRender = this.componentDidUpdate(oldProps, newProps);

    if (isNeedReRender) {
      this.eventBus().emit(EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    // Подумать про сравнение функций
    return JSON.stringify(oldProps) !== JSON.stringify(newProps);
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();

    if (this._element) {
      this._removeEvents();
      this._element.innerHTML = '';

      if (block) {
        this._element.appendChild(block);
      }
    }

    this._addEvents();
  }

  _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.addEventListener(eventName, events[eventName]);
      }
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.removeEventListener(eventName, events[eventName]);
      }
    });
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(): DocumentFragment | undefined {
    return undefined;
  }

  getContent() {
    return this.element;
  }

  _makeChildrenProxy(children: any) {
    return new Proxy(children, {
      get: (target, child) => {
        const value = target[child.toString()];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, child, value) => {
        // eslint-disable-next-line no-param-reassign
        target[child.toString()] = value;
        this.eventBus().emit(EVENTS.FLOW_CDU, { ...target }, target);

        return true;
      },
      deleteProperty: (target, child) => {
        // eslint-disable-next-line no-param-reassign
        delete target[child.toString()];
        return true;
      },
    });
  }

  _makePropsProxy(props: propsExtended<T>) {
    const checkPrivate = (prop: string | symbol): boolean => prop.toString().indexOf('_') === 0;
    return new Proxy(props, {
      get: (target, prop) => {
        const value = target[prop.toString()];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop, value) => {
        const targetCopy = { ...target };
        if (checkPrivate(prop)) {
          throw new Error('Нет доступа');
        }

        // eslint-disable-next-line no-param-reassign
        target[prop.toString() as keyof propsExtended<T>] = value;
        this.eventBus().emit(EVENTS.FLOW_CDU, targetCopy, { ...target });

        return true;
      },
      deleteProperty: (target, prop) => {
        if (checkPrivate(prop)) {
          throw new Error('Нет прав');
        }
        // eslint-disable-next-line no-param-reassign
        delete target[prop.toString()];
        return true;
      },
    });
  }

  _createDocumentElement() {
    const element = document.createElement(this._tagName);
    element.setAttribute('data-id', this.__id);

    const { attributes = {} } = this.props;

    Object.entries(attributes).forEach(([attribute, value]) => {
      element.setAttribute(attribute, value);
    });

    return element;
  }

  show() {
    if (this._element) {
      this._element.style.display = 'block';
    }
  }

  hide() {
    if (this._element) {
      this._element.style.display = 'none';
    }
  }
}
