import React, { Component, Fragment } from 'react';
// import Router from 'next/router';
import { CenteredDiv } from './index';

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
  // Hard coded value, it can be from your state management, cookie , or even localStorage
  const isLoggedIn = false;
  return class ProtectedRoute extends Component {
    static async getInitialProps(ctx) {
      const pageProps = Route.getInitialProps && Route.getInitialProps(ctx);
      return { ...pageProps };
    }

    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        isLoggedIn,
      };
    }

    componentDidMount() {
      if (!isLoggedIn) {
        this.setState({ isLoggedIn: false });
      }
      this.setState({ isLoading: false });
    }

    render() {
      let view;
      if (this.state.isLoggedIn) {
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
  };
}
