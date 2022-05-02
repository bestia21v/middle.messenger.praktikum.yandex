import * as Handlebars from 'handlebars';
import page from 'bundle-text:./chat.hbs';

const pageTemplate = Handlebars.compile(page)({
    content: 'Здесь будет контент',
    sidebar: 'Здесь будет сайдбар'
});

export default pageTemplate;