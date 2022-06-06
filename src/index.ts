import './main.scss';
import './partials/partials';
import { Router } from './router/router';
import { loginPage } from './pages';

const router = new Router('#root');

router
  .use('/', loginPage)
  .start();
