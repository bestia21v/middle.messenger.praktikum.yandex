import { HTTPRequests, OptionsType } from './HTTPRequests';
import { BaseAPI } from './baseAPI';

const user = new HTTPRequests('/user');

class UserAPI extends BaseAPI {
  updateAvatar(options: OptionsType): Promise<any> {
    return user.put('/profile/avatar', options);
  }

  updatePassword(options: OptionsType): Promise<any> {
    return user.put('/password', options);
  }

  updateProfile(options: OptionsType): Promise<any> {
    return user.put('/profile', options);
  }
}

export default new UserAPI();
