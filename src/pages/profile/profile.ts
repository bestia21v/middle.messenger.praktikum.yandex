import page from 'bundle-text:./profile.hbs';
import { Block } from '../../abstract/block';
import { FormProps } from '../../structures/form/form';
import { LinkProps } from '../../components/link/link';
import { AvatarProps } from '../../components/avatar/avatar';

interface Props {
  form: Block<FormProps>;
  changeAvatarLink: Block<LinkProps>;
  changePasswordLink: Block<LinkProps>;
  changeDataLink: Block<LinkProps>;
  loginLink: Block<LinkProps>;
  avatar: Block<AvatarProps>;
}

export class ProfilePage extends Block<Props> {
  render() {
    return this.compile(page, this.props);
  }
}
