import { image } from './image.tmpl';
import { Block } from '../../abstract/block';
import './image.scss';

export interface ImageProps {
  src: string;
}

export class Image extends Block<ImageProps> {
  render() {
    return this.compile(image, this.props);
  }
}
