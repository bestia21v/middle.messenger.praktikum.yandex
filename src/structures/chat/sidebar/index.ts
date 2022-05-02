import * as Handlebars from 'handlebars';
import sidebar from "bundle-text:./sidebar.hbs";
import './sidebar.scss'

Handlebars.registerPartial('sidebar', sidebar);