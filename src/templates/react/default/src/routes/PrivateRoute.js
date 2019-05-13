import React, { Component, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { CenteredDiv } from '../components/Shared';

const UnAuthorized = () => (
  <Fragment>
    <CenteredDiv>
      <div>Hey, sorry but you are not authorized to view this page</div>
      <button>Go Home</button>
    </CenteredDiv>
  </Fragment>
);

class PrivateRoute extends Component {
  render() {
    const { component: Component, history, ...rest } = this.props;
    const isLoggedIn = false;
    return (
      <Route
        {...rest}
        render={(props) => {
          if (isLoggedIn) {
            return <Component {...props} />;
          } else {
            return <UnAuthorized />;
          }
        }}
      />
    );
  }
}

export default hot(module)(withRouter(PrivateRoute));
