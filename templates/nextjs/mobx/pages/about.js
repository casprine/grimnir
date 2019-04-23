import React, { Component } from 'react';
import { CenteredDiv, ProtectedRoute } from '../src/components/shared';
import { inject } from 'mobx-react';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CenteredDiv>
        <div>About page</div>
      </CenteredDiv>
    );
  }
}

export default ProtectedRoute(About);
