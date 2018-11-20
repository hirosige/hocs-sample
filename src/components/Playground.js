import React from 'react'
import { compose, defaultProps } from 'recompose'
import hasLogger from '../hocs/HasLogger'
import withAuthentication from '../hocs/WithAuthentication'
import withAuthorization from '../hocs/WithAuthorization';
import withBaseCRUD from '../hocs/WithBaseCRUD';

const Playground = (props) => (
  <React.Fragment>
    <div>Playground</div>
    <div>
      {JSON.stringify(props)}
    </div>
  </React.Fragment>
)

export default compose(
  defaultProps({
    componentName: 'Playground',
    transactionType: 'List',
  }),
  withAuthentication(),
  withAuthorization(),
  hasLogger(),
  withBaseCRUD('test'),
)(Playground)
