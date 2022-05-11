import page from 'bundle-text:./change-avatar.hbs';
import Block from '../../block';

interface Props {
    form: Block;
    avatar: Block;
    subTitle: Block;
}

export class ChangeAvatarPage extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(page, {
      form: this.props.form,
      subTitle: this.props.subTitle,
      avatar: this.props.avatar,
    });
  }
}
