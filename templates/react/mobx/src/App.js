import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import AppView from './routes/index';
import GlobalStyle from './global.css.js';
// import { ContextProvider } from './context/index';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <ContextProvider> */}
        <AppView />
        <GlobalStyle />
        {/* </ContextProvider> */}
      </Fragment>
    );
  }
}

export default hot(module)(App);
