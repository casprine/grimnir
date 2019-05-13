import React, { Fragment } from 'react';
import styled from 'styled-components';

export const CenteredDiv = ({ children }) => (
  <Fragment>
    <StyledDiv className="center">{children}</StyledDiv>
  </Fragment>
);

const StyledDiv = styled.div`
  outline: 1px solid red;
  height: 100vh;
  flex-direction: column;

  button {
    margin-top: 20px;
  }

  p {
    text-align: center;
  }
`;
