import './main.scss';

import { loginPage } from './pages/login';
import { registrationPage } from './pages/registration';
import { chatPage } from './pages/chat';
import { profilePage } from './pages/profile';
import { notFoundPage } from './pages/not-found-page';
import { changeDataPage } from './pages/change-data';
import { changeAvatarPage } from './pages/change-avatar';
import { changePasswordPage } from './pages/change-password';

import { router } from './router';

import authController from './controllers/authController';

router
  .use('/', loginPage)
  .use('/registration', registrationPage)
  .use('/chat', chatPage)
  .use('/profile', profilePage)
  .use('/change-data', changeDataPage)
  .use('/change-avatar', changeAvatarPage)
  .use('/change-password', changePasswordPage)
  .use('/404', notFoundPage)
  .start();

(async () => {
  await authController.getProfile();
})();
