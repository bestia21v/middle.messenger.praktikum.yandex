import link from 'bundle-text:./link.hbs';
import { Block } from '../../abstract/block';
import './link.scss';
import { attributesType, eventsType } from '../../abstract/block/block';

export interface LinkProps {
  text: string;
}

export class Link extends Block<LinkProps & eventsType & attributesType> {
  constructor(props: LinkProps & eventsType & attributesType) {
    super(props, 'a');
  }

  render() {
    return this.compile(link, this.props);
  }
}
