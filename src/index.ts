import './main.scss';
import './partials/partials';
import { render } from './utils/renderDOM';
import { getPage } from './utils/simpleRouter';

const page = getPage();

render('#root', page);
