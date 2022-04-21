import Handlebars from 'handlebars';
import titleFunc from './../../components/title';
import subTitleFunc from './../../components/subTitle';
import page from 'bundle-text:./404.hbs';

const title = '404 страница не найдена';
const subTitle = 'это не та страница, которую ты ищешь';

Handlebars.registerPartial('title', titleFunc({title}));
Handlebars.registerPartial('subTitle', subTitleFunc({subTitle}));

const pageTemplate = Handlebars.compile(page)();

export default pageTemplate;