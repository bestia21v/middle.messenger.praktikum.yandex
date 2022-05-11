import subTitle from 'bundle-text:./sub-title.hbs';
import Block from '../../block';

interface Props {
    subTitle: string;
    customClass?: string;
}

export default class SubTitle extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(subTitle, this.props);
  }
}
