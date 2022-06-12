import { HTTPRequests, OptionsType } from './HTTPRequests';
import { BaseAPI } from './baseAPI';

const auth = new HTTPRequests('/auth');

class AuthAPI extends BaseAPI {
  signIn(options: OptionsType): Promise<any> {
    return auth.post('/signin', options);
  }

  signUp(options: OptionsType): Promise<any> {
    return auth.post('/signup', options);
  }

  getProfile(options?: OptionsType): Promise<any> {
    return auth.get('/user', options);
  }

  logout(options: OptionsType): Promise<any> {
    return auth.post('/logout', options);
  }
}

export default new AuthAPI();
