import link from 'bundle-text:./link.hbs';
import Block from '../../block';

interface Props {
  text: string;
  href: string;
  customClass?: string;
}

export class Link extends Block {
  constructor(props: Props) {
    super('div', props, 'text-center');
  }

  render() {
    return this.compile(link, this.props);
  }
}
