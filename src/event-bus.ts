enum EventsEnum {
  click = 'click'
}

interface IEventBus {
  on: (event: EventsEnum, callback: any) => void;
  off: (event: EventsEnum, callback: any) => void;
  emit: (event: EventsEnum, ...args: any) => void;
}

class EventBus implements IEventBus {
  listeners: {
    [key in EventsEnum]?: any[]
  };

  constructor() {
    this.listeners = {};
  }

  on(event: EventsEnum, callback: any) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    (this.listeners[event] as any[]).push(callback);
  }

  off(event: EventsEnum, callback: any) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = (this.listeners[event] as any[]).filter(
      (listener: any) => listener !== callback,
    );
  }

  emit(event: EventsEnum, ...args: any) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    (this.listeners[event] as any[]).forEach((listener: any) => {
      listener(...args);
    });
  }
}
