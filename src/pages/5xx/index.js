import Handlebars from 'handlebars';
import titleFunc from './../../components/title';
import subTitleFunc from './../../components/subTitle';
import page from 'bundle-text:./5xx.hbs';

const title = '5XX что-то пошло не так';
const subTitle = 'дроидов на починку отправили уже';

Handlebars.registerPartial('title', titleFunc({title}));
Handlebars.registerPartial('subTitle', subTitleFunc({subTitle}));

const pageTemplate = Handlebars.compile(page)();

export default pageTemplate;