import React, { Fragment, Component } from 'react';
import Head from 'next/head';
import { CenteredDiv } from '../src/components/shared/index';
import { inject, observer } from 'mobx-react';

@inject('commonStore')
@observer
export default class Index extends Component {
  render() {
    const {
      commonStore: { title },
    } = this.props;
    console.log(this.props, 'store from index');
    return (
      <Fragment>
        <Head>
          <title>casprine</title>
        </Head>
        <CenteredDiv className="center">
          <p className="name">casprine</p>
          <p>
            Bootstrapped with{' '}
            <a href="https://github.com/casprine/grimnir" target="_blaknk">
              {title}
              <span role="img" label="grimnir-emoji">
                ⿁
              </span>
            </a>
          </p>
          <p>
            Happy hacking
            <span role="img" aria-label="hacker">
              👨🏿‍💻🥳
            </span>
          </p>
        </CenteredDiv>
      </Fragment>
    );
  }
}
