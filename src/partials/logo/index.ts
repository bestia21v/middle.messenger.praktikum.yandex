import logo from 'bundle-text:./logo.hbs';
import * as Handlebars from 'handlebars';
import './logo.scss';

const src = '/static/logo.jpg';
const logoTemplate = Handlebars.compile(logo)({ src });

Handlebars.registerPartial('logo', logoTemplate);
