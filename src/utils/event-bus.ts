import { BlockEvents, StoreEvents } from '../enums/enums';

type EventBusEvents = BlockEvents | StoreEvents;
type CallbackType = (...args: any) => void;
type ListenersType = {
  [key in EventBusEvents]?: CallbackType[]
};

export interface IEventBus {
  on: (event: EventBusEvents, callback: any) => void;
  off: (event: EventBusEvents, callback: any) => void;
  emit: (event: EventBusEvents, ...args: any) => void;
}

export class EventBus implements IEventBus {
  listeners: ListenersType;

  constructor() {
    this.listeners = {};
  }

  on(event: EventBusEvents, callback: CallbackType) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]?.push(callback);
  }

  off(event: EventBusEvents, callback: CallbackType) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]?.filter(
      (listener: CallbackType) => listener !== callback,
    );
  }

  emit(event: EventBusEvents, ...args: any) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event]?.forEach((listener: CallbackType) => {
      listener(...args);
    });
  }
}
