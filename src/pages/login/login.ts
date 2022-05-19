import page from 'bundle-text:./login.hbs';
import { Block } from '../../abstract/block';
import { LinkProps } from '../../components/link/link';
import { FormProps } from '../../structures/form/form';

interface Props {
  registration: Block<LinkProps>;
  form: Block<FormProps>;
}

export class LoginPage extends Block<Props> {
  render() {
    return this.compile(page, {
      form: this.props.form,
      registration: this.props.registration,
    });
  }
}
