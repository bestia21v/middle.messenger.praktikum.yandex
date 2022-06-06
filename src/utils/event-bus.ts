import { BlockEvents } from '../enums/enums';

export interface IEventBus {
  on: (event: BlockEvents, callback: any) => void;
  off: (event: BlockEvents, callback: any) => void;
  emit: (event: BlockEvents, ...args: any) => void;
}

type CallbackType = (...args: any) => void;
type ListenersType = {
  [key in BlockEvents]?: CallbackType[]
};

export class EventBus implements IEventBus {
  listeners: ListenersType;

  constructor() {
    this.listeners = {};
  }

  on(event: BlockEvents, callback: CallbackType) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]?.push(callback);
  }

  off(event: BlockEvents, callback: CallbackType) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]?.filter(
      (listener: CallbackType) => listener !== callback,
    );
  }

  emit(event: BlockEvents, ...args: any) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event]?.forEach((listener: CallbackType) => {
      listener(...args);
    });
  }
}
