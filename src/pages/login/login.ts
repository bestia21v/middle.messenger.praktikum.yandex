import { login } from './login.tmpl';
import { Block } from '../../abstract/block';
import { LinkProps } from '../../components/link/link';
import { FormProps } from '../../structures/form/form';
import { LogoProps } from '../../components/logo/logo';

interface Props {
  registration: Block<LinkProps>;
  form: Block<FormProps>;
  logo: Block<LogoProps>;
}

export class LoginPage extends Block<Props> {
  render() {
    return this.compile(login, {
      form: this.props.form,
      registration: this.props.registration,
      logo: this.props.logo,
    });
  }
}
