import authAPI from '../services/authAPI';
import { router } from '../router';
import store from '../utils/store';
import { OptionsType } from '../services/HTTPRequests';

class AuthController {
  async getProfile() {
    try {
      const result = await authAPI.getProfile();
      const { status, response } = result;
      switch (status) {
        case 200:
          store.set('user', response);
          if (window.location.pathname === '') {
            router.go('/chat');
          }
          break;
        default:
          router.go('/');
      }
    } catch (err: any) {
      router.go('/');
    }
  }

  async signIn(options: OptionsType) {
    try {
      const result = await authAPI.signIn(options);
      const { response } = result;
      return response;
    } catch (err: any) {
      console.error(err);
    }
  }

  async signUp(options: OptionsType) {
    try {
      const result = await authAPI.signUp(options);
      const { response } = result;
      return response;
    } catch (err: any) {
      console.error(err);
    }
  }

  async logout(options: OptionsType) {
    try {
      await authAPI.logout(options);
      router.go('/');
    } catch (err: any) {
      console.error(err);
    }
  }
}

export default new AuthController();
