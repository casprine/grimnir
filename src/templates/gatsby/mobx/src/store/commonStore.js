import { observable } from "mobx"

class CommonStore {
  @observable text = "Grimnir"
}
export default new CommonStore()
