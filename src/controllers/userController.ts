import userAPI from '../services/userAPI';
import { OptionsType } from '../services/HTTPRequests';
import store from '../utils/store';
import { router } from '../router';

class UserController {
  async updateAvatar(options: OptionsType) {
    const result = await userAPI.updateAvatar(options);
    const { response } = result;
    store.set('user', response);
  }

  async updatePassword(options: OptionsType) {
    await userAPI.updatePassword(options);
    router.go('/profile');
  }

  async updateProfile(options: OptionsType) {
    const result = await userAPI.updateProfile(options);
    const { response } = result;
    store.set('user', response);
    router.go('/profile');
  }
}

export default new UserController();
