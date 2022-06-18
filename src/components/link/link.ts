import { link } from './link.tmpl';
import { Block } from '../../abstract/block';
import './link.scss';
import { AttributesType, EventsType } from '../../abstract/block/block';

export interface LinkProps {
  text: string;
}

export class Link extends Block<LinkProps & EventsType & AttributesType> {
  constructor(props: LinkProps & EventsType & AttributesType) {
    super(props, 'a');
  }

  render() {
    return this.compile(link, this.props);
  }
}
