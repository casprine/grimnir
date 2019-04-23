import { observable, action } from 'mobx';

class AuthStore {
  @observable isLoggedIn = false;

  @action
  toggleLoginStatus = () => {
    this.isLoggedIn = !this.isLoggedIn;
  };
}

export default AuthStore;
