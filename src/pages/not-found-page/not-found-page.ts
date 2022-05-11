import page from 'bundle-text:./not-found-page.hbs';
import Block from '../../block';

interface Props {
    title: Block;
    subTitle: Block;
}

export class NotFoundPage extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(page, {
      title: this.props.title,
      subTitle: this.props.subTitle,
    });
  }
}
