import { isEqualRoute } from './helpers';
import { Block } from '../abstract/block';
import { render } from '../utils/renderDOM';

export class Route {
  _pathname: string;

  _block: Block<any>;

  _isFirstStart: boolean;

  _props: any;

  constructor(pathname: string, view: Block<any>, props: any) {
    this._pathname = pathname;
    this._isFirstStart = false;
    this._block = view;
    this._props = props;
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqualRoute(pathname, this._pathname);
  }

  render() {
    if (!this._isFirstStart) {
      this._isFirstStart = true;
      render(this._props.rootQuery, this._block as Block<any>);
    }

    this._block.show();
  }
}
