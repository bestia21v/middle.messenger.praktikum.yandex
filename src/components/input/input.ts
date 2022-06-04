import { Block } from '../../abstract/block';
import { attributesType, eventsType } from '../../abstract/block/block';
import { addDefaultClass } from '../../utils/props';

export interface InputProps {
  value?: string;
}

export class Input extends Block<InputProps & eventsType & attributesType> {
  constructor(props: InputProps & eventsType & attributesType) {
    const propsExtended = addDefaultClass(props, 'form__form-field-input');
    super(propsExtended, 'input');
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    this._element?.setAttribute('value', newProps.value);
    // const newElem = document.createElement('input');
    // newElem.setAttribute('value', newProps.value);
    // this._element?.replaceWith(newElem);
    // console.log(newProps.value);
    // console.log(this._element.value);
    return oldProps.value !== newProps.value;
  }

  render() {
    return undefined;
  }
}
