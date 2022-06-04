import page from 'bundle-text:./registration.hbs';
import { Block } from '../../abstract/block';
import { LinkProps } from '../../components/link/link';
import { FormProps } from '../../structures/form/form';

interface Props {
    login: Block<LinkProps>;
    form: Block<FormProps>;
}

export class RegistrationPage extends Block<Props> {
  render() {
    return this.compile(page, {
      form: this.props.form,
      login: this.props.login,
    });
  }
}
