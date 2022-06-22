import { changePassword } from './change-password.tmpl';
import { Block } from '../../abstract/block';
import { FormProps } from '../../structures/form/form';
import { SubTitleProps } from '../../components/sub-title/sub-title';

interface Props {
  form: Block<FormProps>;
  subTitle: Block<SubTitleProps>;
}

export class ChangePasswordPage extends Block<Props> {
  render() {
    return this.compile(changePassword, this.props);
  }
}
