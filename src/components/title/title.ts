import title from 'bundle-text:./title.hbs';
import Block from '../../block';

interface Props {
    title: string;
    customClass?: string;
}

export default class Title extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(title, this.props);
  }
}
