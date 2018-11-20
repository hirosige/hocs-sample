import React from 'react'
import { compose } from 'recompose'
import SideMenu from '../components/SideMenu';
import { isLoggedIn } from '../utils/AuthService'
import { Link } from 'react-router-dom'

const withAdminLayout = () => WrappedComponent => {

  return class HOC extends React.Component {
    render () {
      return (
        <div>
          <nav className="navbar" role="navigation" aria-label="main navigation" style={{ background: "#007bff", fontSize: "1.2rem" }}>
            <div className="navbar-brand">
              <div className="navbar-item" style={{ color: "#ffffff" }}>
                BOOK ME INSTEAD.ADMIN HOME
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
              </div>
              <div className="navbar-item">
                <div className="buttons">
                  { (isLoggedIn()) ? (
                      <Link
                        className="button is-danger"
                        to="/logout"
                        style={{ borderRadius: 0 }}
                      >
                        LOGOUT
                      </Link>
                    ) : (
                      <Link
                        className="button is-danger"
                        to="/login"
                        style={{ borderRadius: 0 }}
                      >
                        LOGOUT
                      </Link>
                    )
                  }
                </div>
              </div>
            </div>
          </nav>
          <div className="columns is-gapless is-multiline is-mobile">
            <div className="column is-one-quarter" style={{ background: "#ffffff" }}>
              <SideMenu {...this.props} />
            </div>
            <div className="column" style={{ background: "rgb(237, 242, 247)", minHeight: "100vh", }}>
              <WrappedComponent {...this.props} />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default compose(
)(withAdminLayout)
