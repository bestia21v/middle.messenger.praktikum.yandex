import { logo } from './logo.tmpl';
import { Block } from '../../abstract/block';
import './logo.scss';

export interface LogoProps {
  src: string;
}

export class Logo extends Block<LogoProps> {
  render() {
    return this.compile(logo, this.props);
  }
}
