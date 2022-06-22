import { form } from './form.tmpl';
import { Block } from '../../abstract/block';
import { FieldProps } from '../../components/field/field';
import { ButtonProps } from '../../components/button/button';
import './form.scss';
import { addDefaultClass } from '../../utils/props';
import { AttributesType, EventsType } from '../../abstract/block/block';

export interface FormProps {
  fields: Block<FieldProps>[];
  button?: Block<ButtonProps>;
  customClass?: string;
}

export class Form extends Block<FormProps & EventsType & AttributesType> {
  constructor(props: FormProps & EventsType & AttributesType) {
    const propsExtended = addDefaultClass(props, 'form');
    super(propsExtended, 'form');
  }

  render() {
    return this.compile(form, this.props);
  }
}
