import './main.scss';
import './partials';
import {getTemplate} from "./helpers";

const template = getTemplate();

document.getElementById('root').innerHTML = template;