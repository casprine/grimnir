import React, { Component, Fragment } from 'react';
import Router from 'next/router';
import { CenteredDiv } from './index';
import { inject, observer } from 'mobx-react';

// component to show if user is not authorized
const UnAuthorized = () => (
  <Fragment>
    <CenteredDiv>
      <p>Hey, sorry but you are not authorized to view this page</p>
      <button>Go Back</button>
      <button>Login</button>
    </CenteredDiv>
  </Fragment>
);

// High-Order-Function to check if user is logged
export default function ProtectedRoute(Route) {
  @inject('authStore')
  @observer
  class ProtectedComponent extends Component {
    static async getInitialProps(ctx) {
      const pageProps = Route.getInitialProps && Route.getInitialProps(ctx);
      return {
        ...pageProps,
      };
    }

    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      const {
        authStore: { isLoggedIn },
      } = this.props;
      if (!isLoggedIn) {
        this.setState({ isLoggedIn: false });
      }
      this.setState({ isLoading: false });
    }

    render() {
      let view;
      const { authStore } = this.props;
      const { isLoggedIn } = authStore;
      if (isLoggedIn) {
        view = (
          <div>
            {this.state.isLoading ? (
              <div>LOADING.....</div>
            ) : (
              <Route {...this.props} auth={isLoggedIn} />
            )}
          </div>
        );
      } else {
        view = <UnAuthorized />;
      }
      return <Fragment>{view}</Fragment>;
    }
  }

  return ProtectedComponent;
}
