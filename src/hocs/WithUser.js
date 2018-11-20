import React from 'react'

const withUser = () => WrappedComponent => {
  const WithUser = props => {
    const user = {
      'userId': "UXREA09472345",
      'email': "hirosige1@gmail.com",
    }

    return (
      <div>
        <WrappedComponent {...props} me={user} />
      </div>
    )
  }

  return WithUser
}

export default withUser