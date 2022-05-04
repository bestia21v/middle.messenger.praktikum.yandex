import {
  page404Template,
  page5xxTemplate,
  pageChangeAvatarTemplate,
  pageChangeDataTemplate,
  pageChangePasswordTemplate,
  pageChatTemplate,
  pageLoginTemplate,
  pageProfileTemplate,
  pageRegistrationTemplate,
} from '../pages';

// Простой роутинг
export function getTemplate() {
  const { pathname } = window.location;

  switch (pathname) {
    case '/':
    case '/login':
      return pageLoginTemplate;
    case '/registration':
      return pageRegistrationTemplate;
    case '/profile':
      return pageProfileTemplate;
    case '/chat':
      return pageChatTemplate;
    case '/5xx':
      return page5xxTemplate;
    case '/change-data':
      return pageChangeDataTemplate;
    case '/change-password':
      return pageChangePasswordTemplate;
    case '/change-avatar':
      return pageChangeAvatarTemplate;
    default:
      return page404Template;
  }
}
