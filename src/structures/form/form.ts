import form from 'bundle-text:./form.hbs';
import { Block } from '../../abstract/block';
import { FieldProps } from '../../components/field/field';
import { ButtonProps } from '../../components/button/button';
import './form.scss';
import { addDefaultClass } from '../../utils/props';
import { attributesType, eventsType } from '../../abstract/block/block';

export interface FormProps {
    fields: Block<FieldProps>[];
    button?: Block<ButtonProps>;
    customClass?: string;
}

export class Form extends Block<FormProps & eventsType & attributesType> {
  constructor(props: FormProps & eventsType & attributesType) {
    const propsExtended = addDefaultClass(props, 'form');
    super(propsExtended, 'form');
  }

  render() {
    return this.compile(form, this.props);
  }
}
