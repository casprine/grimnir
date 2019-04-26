import React, { Component, Fragment } from "react"
import CenteredDiv from "./CenteredDiv"
import Layout from "./Layout"
import { inject, observer } from "mobx-react"

// const isBrowser = typeof window !== "undefined"

// component to show if user is not authorized
const UnAuthorized = () => (
  <Fragment>
    <Layout>
      <CenteredDiv>
        <p>Hey, sorry but you are not authorized to view this page</p>
        <button>Go Back</button>
        <button>Login</button>
      </CenteredDiv>
    </Layout>
  </Fragment>
)

// High-Order-Function to check if user is logged
export default function ProtectedRoute(Route) {
  @inject("authStore")
  @observer
  class ProtectedRoute extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: true,
      }
    }

    render() {
      let view
      const {
        authStore: { isLoggedIn },
      } = this.props
      if (isLoggedIn) {
        view = (
          <Fragment>
            <Route {...this.props} auth={isLoggedIn} />
          </Fragment>
        )
      } else {
        view = <UnAuthorized />
      }
      return <Fragment>{view}</Fragment>
    }
  }

  return ProtectedRoute
}
