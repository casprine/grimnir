import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { ContextProvider } from '../src/context/index.js';
import GlobalStyle from './global.css';
import initializeStore from '../src/store';
import { Provider } from 'mobx-react';

class AppView extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;

    const appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props) {
    super(props);

    const isServer = typeof window === 'window';
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <html lang="en" />
        </Head>
        <GlobalStyle />
        <Provider {...this.mobxStore}>
          <ContextProvider value="dark">
            <Component {...pageProps} />
          </ContextProvider>
        </Provider>
      </Container>
    );
  }
}

export default AppView;
