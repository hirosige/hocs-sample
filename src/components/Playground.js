import React from 'react'
import { compose, defaultProps } from 'recompose'
import hasLogger from '../hocs/HasLogger'
import withAuthentication from '../hocs/WithAuthentication'
import withAuthorization from '../hocs/WithAuthorization';
import withAdminLayout from '../hocs/WithAdminLayout';
import withUser from '../hocs/WithUser';

const Playground = (props) => (
  <React.Fragment>
    <nav class="navbar" role="navigation" aria-label="main navigation" style={{ background: "#444444", fontSize: "1.2rem" }}>
      <div class="navbar-brand">
        <div class="navbar-item" style={{ color: "#ffffff" }}>
          TOOL BOX
        </div>
      </div>
    </nav>
    <div>Playground</div>
  </React.Fragment>
)

export default compose(
  defaultProps({
    componentName: 'Playground',
    transactionType: 'List',
  }),
  withAuthentication(),
  withUser(),
  withAuthorization(),
  withAdminLayout(),
  hasLogger(),
)(Playground)
