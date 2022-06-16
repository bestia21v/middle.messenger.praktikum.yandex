import { title } from './title.tmpl';
import { Block } from '../../abstract/block';
import './title.scss';

export interface TitleProps {
  title: string;
  customClass?: string;
}

export class Title extends Block<TitleProps> {
  render() {
    return this.compile(title, this.props);
  }
}
