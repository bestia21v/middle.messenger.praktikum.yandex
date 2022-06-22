import { message } from './message.tmpl';
import { Block } from '../../../../abstract/block';
import { AvatarProps } from '../../../../components/avatar/avatar';
import './message.scss';

export interface SidebarMessageProps {
  companionDisplayName: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  avatar: Block<AvatarProps>;
}

export class SidebarMessage extends Block<SidebarMessageProps> {
  render() {
    return this.compile(message, this.props);
  }
}
