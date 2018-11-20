import React from 'react'

const withActiveMenu = () => WrappedComponent => {
  return class HOC extends React.Component {
    state = {
      isActive: "hello-from-active-hoc"
    }

    render () {
      return (
        <React.Fragment>
          <WrappedComponent {...this.props} {...this.state} />
        </React.Fragment>
      )
    }
  }
}

export default withActiveMenu