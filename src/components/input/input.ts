import { Block } from '../../abstract/block';
import { AttributesType, EventsType } from '../../abstract/block/block';
import { addDefaultClass } from '../../utils/props';

export interface InputProps {
  value?: string;
}

export class Input extends Block<InputProps & EventsType & AttributesType> {
  constructor(props: InputProps & EventsType & AttributesType) {
    const propsExtended = addDefaultClass(props, 'form__form-field-input');
    super(propsExtended, 'input');
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    this._element?.setAttribute('value', newProps.value);
    return oldProps.value !== newProps.value;
  }

  render() {
    return undefined;
  }
}
