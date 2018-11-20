import React from 'react'
import { branch, renderComponent } from 'recompose';

const withAuthorization = () => WrappedComponent => {

  return branch(
    ({ isAuthorized }) => !isAuthorized,
    renderComponent(() => <div>Not Authorized</div>)
  )(WrappedComponent)
}

export default withAuthorization