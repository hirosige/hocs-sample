import React from 'react'
import { branch, renderComponent } from 'recompose';

const withAuthentication = () => WrappedComponent => {

  return branch(
    ({ isAuthenticated }) => !isAuthenticated,
    renderComponent(() => <div>Not Authenticated</div>)
  )(WrappedComponent)
}

export default withAuthentication