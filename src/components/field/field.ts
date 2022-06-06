import field from 'bundle-text:./field.hbs';
import { Block } from '../../abstract/block';
import { AttributesType, EventsType } from '../../abstract/block/block';
import { addDefaultClass } from '../../utils/props';
import { LabelProps } from '../label/label';

export interface FieldProps {
  input: Block<EventsType & AttributesType>;
  label: Block<LabelProps & EventsType & AttributesType>;
  error?: string;
}

export default class Field extends Block<FieldProps> {
  constructor(props: FieldProps & EventsType & AttributesType) {
    const propsExtended = addDefaultClass(props, 'form__form-field');
    super(propsExtended, 'div');
  }

  render() {
    return this.compile(field, this.props);
  }
}
