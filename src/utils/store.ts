import { Indexed, set } from './helpers';
import { EventBus } from './event-bus';
import { StoreEvents } from '../enums/enums';

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    // метод EventBus
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
