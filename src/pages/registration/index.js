import Handlebars from 'handlebars';
import page from 'bundle-text:./registration.hbs';
import './registration.scss'

const data = {
    login: {
        text: 'Войти',
        href: '/login'
    },
    registration: {
        text: 'Регистрация',
        isPrimary: true
    },
    fields: [
        {type: "text", name: "first_name", text: "Имя"},
        {type: "text", name: "second_name", text: "Фамилия"},
        {type: "text", name: "login", text: "Логин"},
        {type: "email", name: "email", text: "Емайл"},
        {type: "phone", name: "phone", text: "Телефон"},
        {type: "password", name: "password", text: "Пароль"},
        {type: "password", name: "confirm_password", text: "Подтверждение пароля"},
    ]
};

const pageTemplate = Handlebars.compile(page)(data);

export default pageTemplate;