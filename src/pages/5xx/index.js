import Handlebars from 'handlebars';
import page from 'bundle-text:./5xx.hbs';

const title = '5XX что-то пошло не так';
const subTitle = 'дроидов на починку отправили уже';

const pageTemplate = Handlebars.compile(page)({ subTitle,title });

export default pageTemplate;