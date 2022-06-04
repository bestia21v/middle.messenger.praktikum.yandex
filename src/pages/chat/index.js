import Handlebars from 'handlebars';
import page from 'bundle-text:./chat.hbs';

const pageTemplate = Handlebars.compile(page)({plug: 'Здесь будет чат'});

export default pageTemplate;