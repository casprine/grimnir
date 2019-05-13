import { observable } from "mobx"

class AuthStore {
  @observable isLoggedIn = false
}

export default new AuthStore()
