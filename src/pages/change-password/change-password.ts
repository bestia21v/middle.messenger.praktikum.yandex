import page from 'bundle-text:./change-password.hbs';
import Block from '../../block';

interface Props {
    form: Block;
    subTitle: Block;
}

export class ChangePasswordPage extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(page, {
      form: this.props.form,
      subTitle: this.props.subTitle,
    });
  }
}
