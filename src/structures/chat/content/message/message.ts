import './message.scss';
import { message } from './message.tmpl';
import { Block } from '../../../../abstract/block';

interface ContentMessageProps {
  text: string;
}

export class ContentMessage extends Block<ContentMessageProps> {
  render() {
    return this.compile(message, this.props);
  }
}
