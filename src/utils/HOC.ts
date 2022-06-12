import store from './store';
import { StoreEvents } from '../enums/enums';
import { Indexed, isEqual } from './helpers';
import { Block } from '../abstract/block';

export function connect<T>(Component: typeof Block, mapStateToProps: (state: Indexed) => Indexed) {
  return class ComponentExtended extends Component<T> {
    constructor(props: any) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      let state = mapStateToProps(store.getState());

      super({ ...props, ...state });

      store.on(StoreEvents.Updated, () => {
        const newState = mapStateToProps(store.getState());

        // если что-то из используемых данных поменялось, обновляем компонент
        if (!isEqual(state, newState)) {
          this.setProps({ ...newState });
        }

        // не забываем сохранить новое состояние
        state = newState;
      });
    }
  };
}
