import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import { em } from 'polished';

const Home = () => (
  <Fragment>
    <StyledHome className="center">
      <p className="name">All Father</p>
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
    </StyledHome>
  </Fragment>
);

const StyledHome = styled.div`
  outline: 1px solid red;
  height: 100vh;
  flex-direction: column;

  .name {
    font-size: ${em('20px')};
    font-weight: 500;
    margin-bottom: 20px;
  }

  p {
    margin: 5px;
  }
`;

export default hot(module)(Home);
