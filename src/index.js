import './main.scss';

//Импорт всех partial
import './../src/components/subTitle';
import './../src/components/title';

//Импорт всех pages
import page404Template from './pages/404'
import page5xxTemplate from './pages/5xx'

let pageTemplate;

//Простой роутинг
switch(window.location.pathname) {
    // case '/':
    // case '/login':
    //     pageTemplate = pageLoginTemplate;
    //     break;
    // case '/registration':
    //     pageTemplate = pageRegistrationTemplate;
    //     break;
    // case '/profile':
    //     pageTemplate = pageProfileTemplate;
    //     break;
    // case '/chat':
    //     pageTemplate = pageChatTemplate;
    //     break;
    case '/5xx':
        pageTemplate = page5xxTemplate;
        break;
    default:
        pageTemplate = page404Template;
}


document.getElementById('root').innerHTML = pageTemplate;