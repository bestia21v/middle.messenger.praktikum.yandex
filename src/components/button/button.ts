import button from 'bundle-text:./button.hbs';
import * as Handlebars from 'handlebars';
import Block from '../../block';

interface Props {
  text: string;
}

export default class Button extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(button, this.props);
  }
}
