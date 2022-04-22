import Handlebars from 'handlebars';
import page from 'bundle-text:./login.hbs';
import './login.scss';

const data = {
    login: {
        text: 'Войти',
        isPrimary: true
    },
    registration: {
        text: 'Регистрация',
        href: '/registration'
    },
    fields: [
        {type: "text", name: "login", text: "Логин"},
        {type: "password", name: "password", text: "Пароль"},
    ]
};

const pageTemplate = Handlebars.compile(page)(data);

export default pageTemplate;