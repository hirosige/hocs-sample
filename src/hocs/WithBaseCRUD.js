import React from 'react'

const withBaseCRUD = (mon) => WrappedComponent => {

  return class HOC extends React.Component {
    render () {
      return (
        <div>
          <h1>Main Title {mon}</h1>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default withBaseCRUD
