import button from 'bundle-text:./button.hbs';
import Handlebars from 'handlebars';
import './button.scss'

const componentFunc = Handlebars.compile(button);

export default componentFunc;