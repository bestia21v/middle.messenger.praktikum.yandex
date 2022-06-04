import label from 'bundle-text:./label.hbs';
import { Block } from '../../abstract/block';
import { attributesType, eventsType } from '../../abstract/block/block';
import { addDefaultClass } from '../../utils/props';

export interface LabelProps {
  text: string;
}

export class Label extends Block<LabelProps & eventsType & attributesType> {
  constructor(props: LabelProps & eventsType & attributesType) {
    const propsExtended = addDefaultClass(props, 'form__form-field-label');
    super(propsExtended, 'div');
  }

  render() {
    return this.compile(label, this.props);
  }
}
