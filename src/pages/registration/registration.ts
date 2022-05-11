import page from 'bundle-text:./registration.hbs';
import Block from '../../block';

interface Props {
    login: Block;
    form: Block;
}

export class RegistrationPage extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(page, {
      form: this.props.form,
      login: this.props.login,
    });
  }
}
