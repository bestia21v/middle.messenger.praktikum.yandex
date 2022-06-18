import { changeAvatar } from './change-avatar.tmpl';
import { Block } from '../../abstract/block';
import { Form, FormProps } from '../../structures/form/form';
import { AvatarProps } from '../../components/avatar/avatar';
import { SubTitleProps } from '../../components/sub-title/sub-title';
import { connect } from '../../utils/HOC';
import { Indexed } from '../../utils/helpers';
import { Avatar } from '../../components/avatar';
import { AVATAR_RESOURCE } from '../../consts';
import { Field } from '../../components/field';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import userController from '../../controllers/userController';
import { Button } from '../../components/button';
import { LinkProps } from '../../components/link/link';

interface Props {
  form: Block<FormProps>;
  avatar: Block<AvatarProps>;
  subTitle: Block<SubTitleProps>;
  back: Block<LinkProps>;
}

class ChangeAvatarPage extends Block<Props> {
  render() {
    return this.compile(changeAvatar, this.props);
  }
}

function mapUserToProps(state: Indexed) {
  const { user } = state;
  return {
    avatar: new Avatar({
      src: (user as any)?.avatar
        ? `${AVATAR_RESOURCE}/${(user as any).avatar}`
        : './static/no-image.jpg',
    }),
    form: new Form({
      events: {
        submit(event: SubmitEvent) {
          event.preventDefault();

          const avatar = this.querySelector('input[name="avatar"]');

          const formData = new FormData();
          formData.append('avatar', avatar.files[0]);

          userController.updateAvatar({ data: formData });
        },
      },
      fields: [
        new Field({
          input: new Input({ attributes: { type: 'file', name: 'avatar', value: '' } }),
          label: new Label({ text: 'Выберите файл' }),
        }),
      ],
      button: new Button({
        text: 'Сохранить',
        attributes: {
          class: 'button',
        },
      }),
    }),
  };
}

export default connect<Props>(ChangeAvatarPage as typeof Block, mapUserToProps);
