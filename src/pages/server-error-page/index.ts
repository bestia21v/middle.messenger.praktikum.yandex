import { ServerErrorPage } from './server-error-page';
import { Title } from '../../components/title';
import { SubTitle } from '../../components/sub-title';

const serverErrorPage = new ServerErrorPage({
  title: new Title({ title: '5XX что-то пошло не так' }),
  subTitle: new SubTitle({ subTitle: 'дроидов на починку отправили уже' }),
});

export { serverErrorPage };
