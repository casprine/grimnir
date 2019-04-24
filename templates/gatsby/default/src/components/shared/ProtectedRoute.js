import React, { Component, Fragment } from "react"
import CenteredDiv from "./CenteredDiv"
import Layout from "./Layout"

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
  const isLoggedIn = false

  return class ProtectedRoute extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: true,
        isLoggedIn,
      }
    }

    componentDidMount() {
      if (!isLoggedIn) {
        this.setState({ isLoggedIn: false })
      }
      this.setState({ isLoading: false })
    }

    render() {
      let view
      if (this.state.isLoggedIn) {
        view = (
          <div>
            {this.state.isLoading ? (
              <div>LOADING.....</div>
            ) : (
              <Route {...this.props} auth={isLoggedIn} />
            )}
          </div>
        )
      } else {
        view = <UnAuthorized />
      }
      return <Fragment>{view}</Fragment>
    }
  }
}
