import button from 'bundle-text:./button.hbs';
import { Block } from '../../abstract/block';
import './button.scss';
import { PropsExtended } from '../../abstract/block/block';

export interface ButtonProps {
  text: string;
}

export class Button extends Block<PropsExtended<ButtonProps>> {
  constructor(props: PropsExtended<ButtonProps>) {
    super(props, 'button');
  }

  render() {
    return this.compile(button, this.props);
  }
}
