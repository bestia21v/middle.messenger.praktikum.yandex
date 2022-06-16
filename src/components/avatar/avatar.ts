import avatar from 'bundle-text:./avatar.hbs';
import { Block } from '../../abstract/block';
import './avatar.scss';

export interface AvatarProps {
  src: string;
}

export default class Avatar extends Block<AvatarProps> {
  render() {
    return this.compile(avatar, this.props);
  }
}
