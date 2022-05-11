import * as Handlebars from 'handlebars';
import content from 'bundle-text:./content.hbs';
import './content.scss';

Handlebars.registerPartial('content', content);
