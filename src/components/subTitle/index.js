import subTitle from 'bundle-text:./subTitle.hbs';
import Handlebars from 'handlebars';
import './subTitle.scss';

const componentFunc = Handlebars.compile(subTitle);

export default componentFunc;