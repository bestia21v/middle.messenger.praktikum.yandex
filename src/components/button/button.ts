import button from 'bundle-text:./button.hbs';
import { Block } from '../../abstract/block';
import './button.scss';
import { attributesType, eventsType } from '../../abstract/block/block';

export interface ButtonProps {
  text: string;
}

export class Button extends Block<ButtonProps & eventsType & attributesType> {
  constructor(props: ButtonProps & eventsType & attributesType) {
    super(props, 'button');
  }

  render() {
    return this.compile(button, this.props);
  }
}
