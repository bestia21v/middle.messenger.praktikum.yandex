import { registration } from './registration.tmpl';
import { Block } from '../../abstract/block';
import { LinkProps } from '../../components/link/link';
import { FormProps } from '../../structures/form/form';
import { LogoProps } from '../../components/logo/logo';

interface Props {
  login: Block<LinkProps>;
  form: Block<FormProps>;
  logo:Block<LogoProps>
}

export class RegistrationPage extends Block<Props> {
  render() {
    return this.compile(registration, {
      form: this.props.form,
      login: this.props.login,
      logo: this.props.logo,
    });
  }
}
