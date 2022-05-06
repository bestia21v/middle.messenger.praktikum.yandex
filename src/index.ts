import './main.scss';
import './partials';
import { getTemplate } from './helpers';

const template = getTemplate();

const root = document.getElementById('root');

if (root) {
  root.innerHTML = template;
}
