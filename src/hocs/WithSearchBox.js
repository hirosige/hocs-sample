import React from 'react'

const withSearchBox = () => WrappedComponent => {
  return class HOC extends React.Component {
    state = {
      condition: ""
    }

    handleClick = () => {
      this.setState({ condition: "clicked condition" })
    }

    render () {
      return (
        <React.Fragment>
          <nav className="navbar" role="navigation" aria-label="main navigation" style={{ background: "#17a2b8", fontSize: "1.2rem" }}>
            <div className="navbar-brand">
              <div className="navbar-item" style={{ color: "#ffffff" }}>
                TOOL BOX
                <button onClick={this.handleClick}>Search</button>
              </div>
            </div>
          </nav>
          <WrappedComponent {...this.props} {...this.state} />
        </React.Fragment>
      )
    }
  }
}

export default withSearchBox