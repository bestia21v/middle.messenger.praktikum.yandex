import page from 'bundle-text:./not-found-page.hbs';
import { Block } from '../../abstract/block';
import { TitleProps } from '../../components/title/title';
import { SubTitleProps } from '../../components/sub-title/sub-title';

interface Props {
    title: Block<TitleProps>;
    subTitle: Block<SubTitleProps>;
}

export class NotFoundPage extends Block<Props> {
  render() {
    return this.compile(page, {
      title: this.props.title,
      subTitle: this.props.subTitle,
    });
  }
}
