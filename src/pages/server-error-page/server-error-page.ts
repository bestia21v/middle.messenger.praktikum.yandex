import { serverErrorPage } from './server-error-page.tmpl';
import { Block } from '../../abstract/block';
import { TitleProps } from '../../components/title/title';
import { SubTitleProps } from '../../components/sub-title/sub-title';

interface Props {
  title: Block<TitleProps>;
  subTitle: Block<SubTitleProps>;
}

export class ServerErrorPage extends Block<Props> {
  render() {
    return this.compile(serverErrorPage, {
      title: this.props.title,
      subTitle: this.props.subTitle,
    });
  }
}
