import ChangeAvatarPage from './change-avatar';
import { SubTitle } from '../../components/sub-title';
import { Avatar } from '../../components/avatar';
import { Form } from '../../structures/form';
import { Field } from '../../components/field';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import { Button } from '../../components/button';
import userController from '../../controllers/userController';
import { Link } from '../../components/link';
import router from '../../router/router';

const changeAvatarPage = new ChangeAvatarPage({
  subTitle: new SubTitle({ subTitle: 'Изменить аватар' }),
  avatar: new Avatar({ src: '/static/no-image.jpg' }),
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
        input: new Input({ attributes: { type: 'file', name: 'avatar' } }),
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
  back: new Link({
    text: 'Назад',
    attributes: {
      class: 'link',
    },
    events: {
      click(event: MouseEvent) {
        event.preventDefault();
        router.back();
      },
    },
  }),
});

export { changeAvatarPage };
