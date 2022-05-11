import * as Handlebars from 'handlebars';
import message from 'bundle-text:./message.hbs';
import './message.scss';

Handlebars.registerPartial('message', message);
