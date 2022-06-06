import { BaseAPI } from './baseAPI';

class AuthAPI extends BaseAPI {
  PREFIX = 'auth';

  signUp(data: any) {
    console.log(data);
    const dataJSON = JSON.stringify(data);
    this.post('http://ya-praktikum.tech/api/v2/auth/signin', { data: dataJSON }).then((res) => {
      console.log(res);
    });
  }
}

export default new AuthAPI();
