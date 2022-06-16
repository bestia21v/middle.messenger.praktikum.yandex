import subTitle from 'bundle-text:./sub-title.hbs';
import { Block } from '../../abstract/block';
import './sub-title.scss';

export interface SubTitleProps {
  subTitle: string;
  customClass?: string;
}

export class SubTitle extends Block<SubTitleProps> {
  render() {
    return this.compile(subTitle, this.props);
  }
}
