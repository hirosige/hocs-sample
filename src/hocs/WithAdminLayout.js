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
                { (isLoggedIn()) ? (
                    <React.Fragment>
                      <div className="navbar-item">
                        <span className="icon" style={{
                          borderRadius: "50%",
                          background: "rgb(0, 209, 178)",
                          color: "#ffffff",
                          height: "35px",
                          width: "35px",
                        }}>
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <div className="navbar-item">
                        <div className="dropdown is-active">
                          <div className="dropdown-trigger">
                            <button className="button is-small" aria-haspopup="true" aria-controls="dropdown-menu" style={{ background: "rgb(0, 209, 178)", color: "#ffffff", border: 0 }}>
                              <span>{this.props.me.email}</span>
                              <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>
                          <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <div className="dropdown-item">
                                MY PROFILE
                              </div>
                              <hr className="dropdown-divider" />
                              <Link
                                className="dropdown-item"
                                to="/logout"
                                style={{ borderRadius: 0 }}
                              >
                                LOGOUT
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ) : (
                    <div className="navbar-item">
                      <Link
                        className="button is-danger"
                        to="/login"
                        style={{ borderRadius: 0 }}
                      >
                        LOGOUT
                      </Link>
                    </div>
                  )
                }
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
