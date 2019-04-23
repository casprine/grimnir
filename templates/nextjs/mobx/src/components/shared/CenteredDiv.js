import React, { Fragment } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

const CenteredDiv = ({ children }) => (
  <Fragment>
    <StyledDiv className="center">{children}</StyledDiv>
  </Fragment>
);

const StyledDiv = styled.div`
  height: 100vh;
  flex-direction: column;

  button {
    margin-top: 20px;
  }

  .name {
    font-size: ${em('20px')};
    font-weight: 500;
    margin-bottom: 20px;
  }

  p {
    margin: 5px;
    text-align: center;
  }
`;
export default CenteredDiv;
