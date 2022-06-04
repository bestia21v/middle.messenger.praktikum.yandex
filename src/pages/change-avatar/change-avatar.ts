import page from 'bundle-text:./change-avatar.hbs';
import { Block } from '../../abstract/block';
import { FormProps } from '../../structures/form/form';
import { AvatarProps } from '../../components/avatar/avatar';
import { SubTitleProps } from '../../components/sub-title/sub-title';

interface Props {
    form: Block<FormProps>;
    avatar: Block<AvatarProps>;
    subTitle: Block<SubTitleProps>;
}

export class ChangeAvatarPage extends Block<Props> {
  render() {
    return this.compile(page, this.props);
  }
}
