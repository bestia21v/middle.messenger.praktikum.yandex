import './main.scss';
import './partials';
import { getPage } from './helpers';
import { render } from './utils/renderDOM';

const page = getPage();

render('#root', page);
