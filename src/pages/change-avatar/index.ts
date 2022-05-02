import * as Handlebars from 'handlebars';
import page from 'bundle-text:./change-avatar.hbs';

const data = {
    src: '/static/no-image.jpg',
    subTitle: 'Изменить аватар',
    submit: {
        text: 'Сохранить'
    },
    fields: [
        {type: "file", name: "avatar", text: "Выберите файл" }
    ]
};

const pageTemplate = Handlebars.compile(page)(data);

export default pageTemplate;