import Handlebars from 'handlebars';
import page from 'bundle-text:./change-data.hbs';
import './change-data.scss'

const data = {
    subTitle: 'Изменить данные',
    save: {
        text: 'Сохранить',
        isPrimary: true
    },
    fields: [
        {type: "text", name: "first_name", text: "Имя", value: "Иван", },
        {type: "text", name: "second_name", text: "Фамилия", value: "Иванов", },
        {type: "text", name: "display_name", text: "Имя в чате", value: "Иван-Иванов", },
        {type: "text", name: "login", text: "Логин", value: "ivanov", },
        {type: "email", name: "email", text: "Емайл", value: "ivanov@yandex.ru", },
        {type: "phone", name: "phone", text: "Телефон", value: "+7 999 999 99 99", },
    ]
};

const pageTemplate = Handlebars.compile(page)(data);

export default pageTemplate;