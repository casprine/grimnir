import React, { Component, Fragment, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { publicRoutes, protectedRoutes } from './routes';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import Loading from './Loading';

class AppView extends Component {
  render() {
    return (
      <Fragment>
        <Suspense fallback={<Loading />}>
          <Switch>
            {publicRoutes.map((route, index) => {
              return <Route {...route} key={index} />;
            })}

            {protectedRoutes.map((route, index) => {
              return <PrivateRoute {...route} key={index} />;
            })}
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Fragment>
    );
  }
}

export default AppView;
