import message from 'bundle-text:./message.hbs';
import { Block } from '../../../../abstract/block';
import { AvatarProps } from '../../../../components/avatar/avatar';
import './message.scss';

export interface MessageProps {
    companionDisplayName: string;
    lastMessage: string;
    time: string;
    unreadCount: number;
    avatar: Block<AvatarProps>;
}

export class Message extends Block<MessageProps> {
  render() {
    return this.compile(message, this.props);
  }
}
