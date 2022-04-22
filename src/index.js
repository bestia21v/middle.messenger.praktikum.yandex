import './main.scss';

import './partials'

//Импорт всех pages
import page404Template from './pages/404';
import page5xxTemplate from './pages/5xx';
import pageChatTemplate from './pages/chat';
import pageLoginTemplate from './pages/login';
import pageRegistrationTemplate from './pages/registration';
import pageProfileTemplate from './pages/profile';
import pageChangeDataTemplate from './pages/change-data';
import pageChangePasswordTemplate from './pages/change-password';
import pageChangeAvatarTemplate from './pages/change-avatar';

let pageTemplate;

const {pathname} = window.location;

//Простой роутинг
switch(pathname) {
    case '/':
    case '/login':
        pageTemplate = pageLoginTemplate;
        break;
    case '/registration':
        pageTemplate = pageRegistrationTemplate;
        break;
    case '/profile':
        pageTemplate = pageProfileTemplate;
        break;
    case '/chat':
        pageTemplate = pageChatTemplate;
        break;
    case '/5xx':
        pageTemplate = page5xxTemplate;
        break;
    case '/change-data':
        pageTemplate = pageChangeDataTemplate;
        break;
    case '/change-password':
        pageTemplate = pageChangePasswordTemplate;
        break;
    case '/change-avatar':
        pageTemplate = pageChangeAvatarTemplate;
        break;
    default:
        pageTemplate = page404Template;
}


document.getElementById('root').innerHTML = pageTemplate;