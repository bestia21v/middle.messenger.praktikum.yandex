import { v4 as makeUUID } from 'uuid';
import * as Handlebars from 'handlebars';
import { EventBus } from './event-bus';

export enum EVENTS {
    INIT = 'init',
    FLOW_CDM = 'flow:component-did-mount',
    FLOW_CDU = 'flow:component-did-update',
    FLOW_RENDER = 'flow:render'
}

// Нельзя создавать экземпляр данного класса
class Block {
  _element: HTMLElement | null = null;

  _tagName: string;

  props: any;

  children: any;

  __id: string;

  customClass: string;

  eventBus: () => EventBus;

  constructor(tagName = 'div', propsAndChildren = {}, customClass = '') {
    const eventBus = new EventBus();

    this._tagName = tagName;
    this.customClass = customClass;

    this.__id = makeUUID();

    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;
    this.props = this._makePropsProxy({ ...props, __id: this.__id });
    this.eventBus = () => eventBus;
    this._registerEvents(this.eventBus());
    this.eventBus().emit(EVENTS.INIT);
  }

  _getChildren(propsAndChildren: any) {
    const children: any = {};
    const props: any = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  compile(template: string, props: any) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]: [string, any]) => {
      propsAndStubs[key] = `<div data-id="${child.__id}"></div>`;
    });

    const fragment = document.createElement('template');

    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this.children).forEach((child: any) => {
      const stub = fragment.content.querySelector(`[data-id="${child.__id}"]`);

      if (stub) {
        stub.replaceWith(child.getContent());
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
    if (this._tagName) {
      this._element = this._createDocumentElement(this._tagName, this.customClass);
    }
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
    return JSON.stringify(oldProps) === JSON.stringify(newProps);
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

    this._removeEvents();
    if (this._element) {
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

  _makePropsProxy(props: {
    [key: string]: number | string | boolean | null | ((...args: any) => void)
  }) {
    const checkPrivate = (prop: string | symbol): boolean => prop.toString().indexOf('_') === 0;
    return new Proxy(props, {
      get: (target, prop) => {
        const value = target[prop.toString()];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop, value) => {
        if (checkPrivate(prop)) {
          throw new Error('Нет доступа');
        }

        // eslint-disable-next-line no-param-reassign
        target[prop.toString()] = value;
        this.eventBus().emit(EVENTS.FLOW_CDU, { ...target }, target);

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

  _createDocumentElement(tagName: string, customClass: string) {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this.__id);
    if (customClass) {
      element.classList.add(customClass);
    }
    return element;
  }

  // show() {
  //   if (this._element) {
  //     this._element.style.display = 'block';
  //   }
  // }
  //
  // hide() {
  //   if (this._element) {
  //     this._element.style.display = 'none';
  //   }
  // }
}

export default Block;
