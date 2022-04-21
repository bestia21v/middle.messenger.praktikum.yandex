import image from 'bundle-text:./image.hbs';
import Handlebars from 'handlebars';
import './image.scss'

const componentFunc = Handlebars.compile(image);

export default componentFunc;