import Handlebars from 'handlebars';
import page from 'bundle-text:./change-password.hbs';
import './change-password.scss'

const data = {
    subTitle: 'Изменить пароль',
    save: {
        text: 'Сохранить',
        isPrimary: true
    },
    fields: [
        {type: "password", name: "oldPassword", text: "Старый пароль" },
        {type: "password", name: "newPassword", text: "Новый пароль" },
        {type: "password", name: "confirmPassword", text: "Подтверждение пароля" },
    ]
};

const pageTemplate = Handlebars.compile(page)(data);

export default pageTemplate;