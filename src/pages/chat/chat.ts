import { chat } from './chat.tmpl';
import { Block } from '../../abstract/block';
import './chat.scss';
import { SidebarProps } from '../../structures/chat/sidebar/sidebar';
import { ContentProps } from '../../structures/chat/content/content';
import { PropsExtended } from '../../abstract/block/block';
import chatController from '../../controllers/chatController';

interface Props {
  sidebar: Block<SidebarProps>,
  content: Block<ContentProps>

}

export class ChatPage extends Block<Props> {
  constructor(props: PropsExtended<Props>) {
    super(props);

    chatController.getChats({});
  }

  render() {
    return this.compile(chat, this.props);
  }
}
