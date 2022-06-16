import './message.scss';
import message from 'bundle-text:./message.hbs';
import { Block } from '../../../../abstract/block';

interface ContentMessageProps {
  text: string;
}

export class ContentMessage extends Block<ContentMessageProps> {
  render() {
    return this.compile(message, this.props);
  }
}
