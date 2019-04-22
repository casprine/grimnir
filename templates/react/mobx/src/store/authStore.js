import { observable, action } from 'mobx';

class AuthStore {
  @observable isLoggedIn = true;

  @action
  toggleLoginStatus = () => {
    this.isLoggedIn = !this.isLoggedIn;
  };
}

export default new AuthStore();
