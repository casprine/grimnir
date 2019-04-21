import React, { Fragment } from 'react';
import { CenteredDiv } from '../components/Shared';

const NotFound = () => (
  <Fragment>
    <CenteredDiv>
      <p>Hey, I think you are lost, please go back </p>
      <button>Go back</button>
    </CenteredDiv>
  </Fragment>
);

export default NotFound;
