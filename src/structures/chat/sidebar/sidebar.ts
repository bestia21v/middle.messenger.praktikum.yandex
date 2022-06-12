import sidebar from 'bundle-text:./sidebar.hbs';
import { Block } from '../../../abstract/block';
import { SidebarMessage, SidebarMessageProps } from './message/message';
import './sidebar.scss';
import { ButtonProps } from '../../../components/button/button';
import { connect } from '../../../utils/HOC';
import { Avatar } from '../../../components/avatar';
import store from '../../../utils/store';
import chatController from '../../../controllers/chatController';

export interface SidebarProps {
  title: string;
  createChat: Block<ButtonProps>
  messages: Block<SidebarMessageProps>[];

}

class Sidebar extends Block<SidebarProps> {
  render() {
    return this.compile(sidebar, this.props);
  }
}

function getTime(dateStr: string): string {
  const date = new Date(dateStr);
  const minutes = date.getMinutes();
  const hours = date.getHours();
  return `${hours}:${minutes}`;
}

function mapChatToProps(state: any) {
  return {
    messages: (state.chats || []).map((chat: any) => {
      const { last_message: lastMessage, unread_count: unreadCount, avatar } = chat;
      const message = new SidebarMessage({
        time: lastMessage?.time ? getTime(lastMessage.time) : '',
        avatar: new Avatar({
          src: avatar || '/static/no-image.jpg',
          attributes: {
            class: 'avatar--small',
          },
        }),
        companionDisplayName: lastMessage?.user?.first_name || 'Нет собеседника',
        lastMessage: lastMessage?.content ? lastMessage?.content : '',
        unreadCount,
        events: {
          click() {
            chatController.getChatToken(chat.id, {}).then(() => {
              store.set('chatId', chat.id);
            });
          },
        },
      });
      return message;
    }),
  };
}

export default connect<SidebarProps>(Sidebar as typeof Block, mapChatToProps);
