import page from 'bundle-text:./profile.hbs';
import { Block } from '../../abstract/block';
import { Form, FormProps } from '../../structures/form/form';
import { LinkProps } from '../../components/link/link';
import { AvatarProps } from '../../components/avatar/avatar';
import { connect } from '../../utils/HOC';
import { Avatar } from '../../components/avatar';
import { Field } from '../../components/field';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import { AVATAR_RESOURCE } from '../../consts';

interface Props {
  form: Block<FormProps>;
  changeAvatarLink: Block<LinkProps>;
  changePasswordLink: Block<LinkProps>;
  changeDataLink: Block<LinkProps>;
  loginLink: Block<LinkProps>;
  avatar: Block<AvatarProps>;
}

class ProfilePage extends Block<Props> {
  render() {
    return this.compile(page, this.props);
  }
}

function mapUserToProps(state: any) {
  const { user } = state;
  return {
    avatar: new Avatar({
      src: user?.avatar
        ? `${AVATAR_RESOURCE}/${user.avatar}`
        : '/static/no-image.jpg',
    }),
    form: new Form({
      fields: [
        new Field({
          input: new Input({
            attributes: {
              type: 'text', name: 'first_name', value: user?.first_name || '', disabled: true,
            },
          }),
          label: new Label({ text: 'Имя' }),
        }),
        new Field({
          input: new Input({
            attributes: {
              type: 'text', name: 'second_name', value: user?.second_name || '', disabled: true,
            },
          }),
          label: new Label({ text: 'Фамилия' }),
        }),
        new Field({
          input: new Input({
            attributes: {
              type: 'text', name: 'display_name', value: user?.display_name || '', disabled: true,
            },
          }),
          label: new Label({ text: 'Имя в чате' }),
        }),
        new Field({
          input: new Input({
            attributes: {
              type: 'text', name: 'login', value: user?.login || '', disabled: true,
            },
          }),
          label: new Label({ text: 'Логин' }),
        }),
        new Field({
          input: new Input({
            attributes: {
              type: 'email', name: 'email', value: user?.email || '', disabled: true,
            },
          }),
          label: new Label({ text: 'Емайл' }),
        }),
        new Field({
          input: new Input({
            attributes: {
              type: 'phone', name: 'phone', value: user?.phone || '', disabled: true,
            },
          }),
          label: new Label({ text: 'Телефон' }),
        }),
      ],
    }),
  };
}

export default connect<Props>(ProfilePage as typeof Block, mapUserToProps);
