import avatar from 'bundle-text:./avatar.hbs';
import Block from '../../block';

interface Props {
    src: string;
    customClass?: string;
}

export default class Avatar extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(avatar, this.props);
  }
}
