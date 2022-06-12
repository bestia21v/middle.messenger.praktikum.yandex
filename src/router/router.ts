import { Route } from './route';
import { ROOT_QUERY } from '../consts';

class Router {
  routes: Route[];

  history: History;

  _currentRoute: null | Route;

  _rootQuery: string;

  constructor(rootQuery: string) {
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
  }

  use(pathname: string, block: any) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      this._onRoute(((event.currentTarget as any).location as Location).pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    if (route === undefined) {
      this._currentRoute = null;
      this._onRoute('/404');
    } else {
      this._currentRoute = route;
      route.render();
    }
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string): Route {
    return this.routes.find((route) => route.match(pathname)) as Route;
  }
}

export default new Router(ROOT_QUERY);
