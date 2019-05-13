import React from "react"
import { Provider } from "mobx-react"
import store from "./src/store"

export default ({ element }) => <Provider {...store}>{element}</Provider>
