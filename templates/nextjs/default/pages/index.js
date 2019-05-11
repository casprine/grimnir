import React, { Fragment } from 'react';
import Head from 'next/head';
import { CenteredDiv } from '../src/components/shared/index';

export default () => (
  <Fragment>
    <Head>
      <title>casprine</title>
    </Head>
    <CenteredDiv className="center">
      <p className="name">casprine</p>
      <p>
        Bootstrapped with{' '}
        <a href="https://github.com/casprine/grimnir" target="_blaknk">
          Grimnir{' '}
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
