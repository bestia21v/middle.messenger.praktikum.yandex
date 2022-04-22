import noImage from 'bundle-text:./no-image.hbs';
import Handlebars from 'handlebars';
import './no-image.scss'

const src = '/static/no-image.jpg';
const noImageTemplate = Handlebars.compile(noImage)({src, customClass: 'image--rounded'});

Handlebars.registerPartial('no-image', noImageTemplate);