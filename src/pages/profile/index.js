import Handlebars from 'handlebars';
import page from 'bundle-text:./profile.hbs';
import './profile.scss'

const data = {
    changeAvatar: {
        text: 'Сменить аватар',
        href: '/change-avatar'
    },
    changeData: {
        text: 'Сменить данные',
        href: '/change-data'
    },
    changePassword: {
        text: 'Сменить пароль',
        href: '/change-password'
    },
    logout: {
        text: 'Выйти',
        href: '/login',
        customClass: 'link--error'
    },
    fields: [
        {type: "text", name: "first_name", text: "Имя", value: "Иван", isDisabled: true},
        {type: "text", name: "second_name", text: "Фамилия", value: "Иванов", isDisabled: true},
        {type: "text", name: "display_name", text: "Имя в чате", value: "Иван-Иванов", isDisabled: true},
        {type: "text", name: "login", text: "Логин", value: "ivanov", isDisabled: true},
        {type: "email", name: "email", text: "Емайл", value: "ivanov@yandex.ru", isDisabled: true},
        {type: "phone", name: "phone", text: "Телефон", value: "+7 999 999 99 99", isDisabled: true},
    ]
};

const pageTemplate = Handlebars.compile(page)(data);

export default pageTemplate;