import * as Handlebars from 'handlebars';
import page from 'bundle-text:./profile.hbs';

const data = {
  src: '/static/no-image.jpg',
  links: [
    { text: 'Сменить аватар', href: '/change-avatar', customClass: 'link--left' },
    { text: 'Сменить данные', href: '/change-data', customClass: 'link--left' },
    { text: 'Сменить пароль', href: '/change-password', customClass: 'link--left' },
    { text: 'Выйти', href: '/login', customClass: 'link--error link--left' },
  ],
  fields: [
    {
      type: 'text', name: 'first_name', text: 'Имя', value: 'Иван', isDisabled: true,
    },
    {
      type: 'text', name: 'second_name', text: 'Фамилия', value: 'Иванов', isDisabled: true,
    },
    {
      type: 'text', name: 'display_name', text: 'Имя в чате', value: 'Иван-Иванов', isDisabled: true,
    },
    {
      type: 'text', name: 'login', text: 'Логин', value: 'ivanov', isDisabled: true,
    },
    {
      type: 'email', name: 'email', text: 'Емайл', value: 'ivanov@yandex.ru', isDisabled: true,
    },
    {
      type: 'phone', name: 'phone', text: 'Телефон', value: '+7 999 999 99 99', isDisabled: true,
    },
  ],
};

const pageTemplate = Handlebars.compile(page)(data);

export default pageTemplate;
