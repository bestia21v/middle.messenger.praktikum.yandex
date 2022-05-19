import page from 'bundle-text:./chat.hbs';
import { Block } from '../../abstract/block';
import './chat.scss';

interface Props {
    sidebar: Block<any>,
    content: Block<any>
}

export class ChatPage extends Block<Props> {
  render() {
    return this.compile(page, this.props);
  }
}
