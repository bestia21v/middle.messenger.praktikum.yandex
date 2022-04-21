import title from 'bundle-text:./title.hbs';
import Handlebars from 'handlebars';
import './title.scss'

const componentFunc = Handlebars.compile(title);

export default componentFunc;