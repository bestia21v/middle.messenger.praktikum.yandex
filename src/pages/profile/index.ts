import ProfilePage from './profile';
import { Avatar } from '../../components/avatar';
import { Form } from '../../structures/form';
import { Field } from '../../components/field';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import { Link } from '../../components/link';
import router from '../../router/router';
import authController from '../../controllers/authController';

const profilePage = new ProfilePage({
  avatar: new Avatar({ src: '/static/no-image.jpg' }),
  form: new Form({
    fields: [
      new Field({
        input: new Input({
          attributes: {
            type: 'text', name: 'first_name', value: 'Иван', disabled: true,
          },
        }),
        label: new Label({ text: 'Имя' }),
      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'text', name: 'second_name', value: 'Иванов', disabled: true,
          },
        }),
        label: new Label({ text: 'Фамилия' }),
      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'text', name: 'display_name', value: 'Иван-Иванов', disabled: true,
          },
        }),
        label: new Label({ text: 'Имя в чате' }),
      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'text', name: 'login', value: 'ivanov', disabled: true,
          },
        }),
        label: new Label({ text: 'Логин' }),
      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'email', name: 'email', value: 'ivanov@yandex.ru', disabled: true,
          },
        }),
        label: new Label({ text: 'Емайл' }),
      }),
      new Field({
        input: new Input({
          attributes: {
            type: 'phone', name: 'phone', value: '+7 999 999 99 99', disabled: true,
          },
        }),
        label: new Label({ text: 'Телефон' }),
      }),
    ],
  }),
  changeAvatarLink: new Link({
    text: 'Сменить аватар',
    events: {
      click(event: MouseEvent) {
        event.preventDefault();
        router.go('/change-avatar');
      },
    },
    attributes: { class: 'link' },
  }),
  changePasswordLink: new Link({
    text: 'Сменить пароль',
    events: {
      click(event: MouseEvent) {
        event.preventDefault();
        router.go('/change-password');
      },
    },
    attributes: { class: 'link' },
  }),
  changeDataLink: new Link({
    text: 'Сменить данные',
    events: {
      click(event: MouseEvent) {
        event.preventDefault();
        router.go('/change-data');
      },
    },
    attributes: { class: 'link' },
  }),
  loginLink: new Link({
    text: 'Выйти',
    events: {
      click(event: MouseEvent) {
        event.preventDefault();
        authController.logout({});
      },
    },
    attributes: { class: 'link link--error' },
  }),
  back: new Link({
    text: 'Чаты',
    attributes: {
      class: 'link',
    },
    events: {
      click(event: MouseEvent) {
        event.preventDefault();
        router.go('/chat');
      },
    },
  }),
});

export { profilePage };
