import sidebar from 'bundle-text:./sidebar.hbs';
import { Block } from '../../../abstract/block';
import { MessageProps } from './message/message';
import './sidebar.scss';

interface Props {
    title: string;
    messages: Block<MessageProps>[]
}

export class Sidebar extends Block<Props> {
  render() {
    return this.compile(sidebar, this.props);
  }
}
