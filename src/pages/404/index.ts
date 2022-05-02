import * as Handlebars from 'handlebars';
import page from 'bundle-text:./404.hbs';

const title = '404 страница не найдена';
const subTitle = 'это не та страница, которую ты ищешь';

const pageTemplate = Handlebars.compile(page)({title, subTitle});

export default pageTemplate;