import React, { Fragment, Component } from "react"
import { CenteredDiv, Layout, ProtectedRoute } from "../components/shared"

class About extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <CenteredDiv>
            <p>About page</p>
          </CenteredDiv>
        </Layout>
      </Fragment>
    )
  }
}

export default ProtectedRoute(About)
