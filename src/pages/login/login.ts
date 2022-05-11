import page from 'bundle-text:./login.hbs';
import Block from '../../block';

interface Props {
  registration: Block;
  form: Block;
}

export class LoginPage extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(page, {
      form: this.props.form,
      registration: this.props.registration,
    });
  }
}
