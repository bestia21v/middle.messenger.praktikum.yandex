import { NotFoundPage } from './not-found-page';
import { Title } from '../../components/title';
import { SubTitle } from '../../components/sub-title';

const notFoundPage = new NotFoundPage({
  title: new Title({ title: '404 страница не найдена' }),
  subTitle: new SubTitle({ subTitle: 'это не та страница, которую ты ищешь' }),
});

export { notFoundPage };
