import React, { Component, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { CenteredDiv } from '../components/Shared';
import { inject, observer } from 'mobx-react';

const UnAuthorized = () => (
  <Fragment>
    <CenteredDiv>
      <p>Hey, sorry but you are not authorized to view this page</p>
      <button>Go Home</button>
    </CenteredDiv>
  </Fragment>
);

@withRouter
@inject('authStore')
@observer
class PrivateRoute extends Component {
  render() {
    const { component: Component, authStore, history, ...rest } = this.props;
    const isLoggedIn = authStore.isLoggedIn;
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

export default hot(module)(PrivateRoute);
