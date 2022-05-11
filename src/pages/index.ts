import { LoginPage } from './login/login';
import { Link } from '../components/link/link';
import { Form } from '../structures/form/form';
import { ServerErrorPage } from './server-error-page';
import Title from '../components/title/title';
import SubTitle from '../components/sub-title/sub-title';
import { NotFoundPage } from './not-found-page/not-found-page';
import { ChangeDataPage } from './change-data/change-data';
import { ChangePasswordPage } from './change-password/change-password';
import { RegistrationPage } from './registration/registration';
import { ChangeAvatarPage } from './change-avatar/change-avatar';
import Avatar from '../components/avatar/avatar';

const loginPage = new LoginPage({
  registration: new Link({
    text: 'Регистрация',
    href: '/registration',
  }),
  form: new Form({
    fields: [
      { type: 'text', name: 'login', text: 'Логин' },
      { type: 'password', name: 'password', text: 'Пароль' },
    ],
    submit: {
      text: 'Войти',
    },
  }),
});
const serverErrorPage = new ServerErrorPage({
  title: new Title({ title: '5XX что-то пошло не так' }),
  subTitle: new SubTitle({ subTitle: 'дроидов на починку отправили уже' }),
});
const notFoundPage = new NotFoundPage({
  title: new Title({ title: '404 страница не найдена' }),
  subTitle: new SubTitle({ subTitle: 'это не та страница, которую ты ищешь' }),
});
const changeDataPage = new ChangeDataPage({
  subTitle: new SubTitle({ subTitle: 'Изменить данные' }),
  form: new Form({
    fields: [
      {
        type: 'text', name: 'first_name', text: 'Имя', value: 'Иван',
      },
      {
        type: 'text', name: 'second_name', text: 'Фамилия', value: 'Иванов',
      },
      {
        type: 'text', name: 'display_name', text: 'Имя в чате', value: 'Иван-Иванов',
      },
      {
        type: 'text', name: 'login', text: 'Логин', value: 'ivanov',
      },
      {
        type: 'email', name: 'email', text: 'Емайл', value: 'ivanov@yandex.ru',
      },
      {
        type: 'phone', name: 'phone', text: 'Телефон', value: '+7 999 999 99 99',
      },
    ],
    submit: {
      text: 'Сохранить',
    },
  }),
});
const changePasswordPage = new ChangePasswordPage({
  subTitle: new SubTitle({ subTitle: 'Изменить пароль' }),
  form: new Form({
    fields: [
      { type: 'password', name: 'oldPassword', text: 'Старый пароль' },
      { type: 'password', name: 'newPassword', text: 'Новый пароль' },
      { type: 'password', name: 'confirmPassword', text: 'Подтверждение пароля' },
    ],
    submit: {
      text: 'Сохранить',
    },
  }),
});
const registrationPage = new RegistrationPage({
  login: new Link({
    text: 'Войти',
    href: '/login',
  }),
  form: new Form({
    fields: [
      { type: 'text', name: 'first_name', text: 'Имя' },
      { type: 'text', name: 'second_name', text: 'Фамилия' },
      { type: 'text', name: 'login', text: 'Логин' },
      { type: 'email', name: 'email', text: 'Емайл' },
      { type: 'phone', name: 'phone', text: 'Телефон' },
      { type: 'password', name: 'password', text: 'Пароль' },
      { type: 'password', name: 'confirm_password', text: 'Подтверждение пароля' },
    ],
    submit: {
      text: 'Регистрация',
    },
  }),
});
const changeAvatarPage = new ChangeAvatarPage({
  subTitle: new SubTitle({ subTitle: 'Изменить аватар' }),
  avatar: new Avatar({ src: '/static/no-image.jpg' }),
  form: new Form({
    fields: [
      { type: 'file', name: 'avatar', text: 'Выберите файл' },
    ],
    submit: {
      text: 'Сохранить',
    },
  }),
});

export {
  loginPage,
  serverErrorPage,
  notFoundPage,
  changeDataPage,
  changePasswordPage,
  registrationPage,
  changeAvatarPage,
};
