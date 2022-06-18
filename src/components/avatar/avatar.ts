import { avatar } from './avatar.tmpl';
import { Block } from '../../abstract/block';
import './avatar.scss';
import '../image/image.scss';

export interface AvatarProps {
  src: string;
}

export class Avatar extends Block<AvatarProps> {
  render() {
    return this.compile(avatar, this.props);
  }
}
