import { isEqualRoute } from './helpers';
import { Block } from '../abstract/block';
import { render } from '../utils/renderDOM';

export class Route {
  _pathname: string;

  _block: Block<any>;

  // _blockClass: Block<any>;

  _props: any;

  constructor(pathname: string, view: Block<any>, props: any) {
    this._pathname = pathname;
    // this._blockClass = view;
    this._block = view;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
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
    // if (!this._block) {
    //   this._block = new this._blockClass();
    //   render(this._props.rootQuery, this._block as Block<any>);
    //   return;
    // }
    //
    // this._block.show();
    render(this._props.rootQuery, this._block as Block<any>);
  }
}
