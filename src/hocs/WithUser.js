import React from 'react'
import { getMe } from '../utils/AuthService'

const withUser = () => WrappedComponent => {
  const WithUser = props => {

    return (
      <div>
        <WrappedComponent {...props} me={getMe()} />
      </div>
    )
  }

  return WithUser
}

export default withUser