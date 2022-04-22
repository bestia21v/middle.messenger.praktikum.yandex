import Handlebars from 'handlebars';
import page from 'bundle-text:./change-avatar.hbs';
import './change-avatar.scss'

const data = {
    subTitle: 'Изменить аватар',
    save: {
        text: 'Сохранить',
        isPrimary: true
    },
    fields: [
        {type: "file", name: "avatar", text: "Выберите файл" }
    ]
};

const pageTemplate = Handlebars.compile(page)(data);

export default pageTemplate;