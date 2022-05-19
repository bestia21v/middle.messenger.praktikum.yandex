// Простой роутинг
import {
  changeAvatarPage,
  changeDataPage,
  changePasswordPage,
  loginPage,
  registrationPage,
  serverErrorPage,
  notFoundPage,
  profilePage,
  chatPage,
} from '../pages';

export function getPage() {
  const { pathname } = window.location;

  switch (pathname) {
    case '/':
    case '/login':
      return loginPage;
    case '/registration':
      return registrationPage;
    case '/profile':
      return profilePage;
    case '/chat':
      return chatPage;
    case '/5xx':
      return serverErrorPage;
    case '/change-data':
      return changeDataPage;
    case '/change-password':
      return changePasswordPage;
    case '/change-avatar':
      return changeAvatarPage;
    default:
      return notFoundPage;
  }
}
