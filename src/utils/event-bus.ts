import { EVENTS } from '../abstract/block/block';

export interface IEventBus {
  on: (event: EVENTS, callback: any) => void;
  off: (event: EVENTS, callback: any) => void;
  emit: (event: EVENTS, ...args: any) => void;
}

type CallbackType = (...args: any) => void;
type ListenersType = {
  [key in EVENTS]?: CallbackType[]
};

export class EventBus implements IEventBus {
  listeners: ListenersType;

  constructor() {
    this.listeners = {};
  }

  on(event: EVENTS, callback: CallbackType) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]?.push(callback);
  }

  off(event: EVENTS, callback: CallbackType) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]?.filter(
      (listener: CallbackType) => listener !== callback,
    );
  }

  emit(event: EVENTS, ...args: any) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event]?.forEach((listener: CallbackType) => {
      listener(...args);
    });
  }
}
