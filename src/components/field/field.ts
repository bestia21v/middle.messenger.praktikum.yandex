import field from 'bundle-text:./field.hbs';
import { Block } from '../../abstract/block';
import { attributesType, eventsType } from '../../abstract/block/block';
import { addDefaultClass } from '../../utils/props';
import { LabelProps } from '../label/label';

export interface FieldProps {
    input: Block<eventsType & attributesType>;
    label: Block<LabelProps & eventsType & attributesType>;
    error?: string;
}

export default class Field extends Block<FieldProps> {
  constructor(props: FieldProps & eventsType & attributesType) {
    const propsExtended = addDefaultClass(props, 'form__form-field');
    super(propsExtended, 'div');
  }

  render() {
    return this.compile(field, this.props);
  }
}
