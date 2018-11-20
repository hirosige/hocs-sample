import React from 'react'
import { compose } from 'recompose'
import SideMenu from '../components/SideMenu';

const withAdminLayout = (mon) => WrappedComponent => {

  return class HOC extends React.Component {
    render () {
      return (
        <div>
          <nav class="navbar" role="navigation" aria-label="main navigation" style={{ background: "#444444", fontSize: "1.2rem" }}>
            <div class="navbar-brand">
              <div class="navbar-item" style={{ color: "#ffffff" }}>
                HOCs Sample
              </div>
            </div>
          </nav>
          <div class="columns is-gapless is-multiline is-mobile">
            <div class="column is-one-quarter" style={{ background: "rgb(132, 35, 35)" }}>
              <SideMenu {...this.props} />
            </div>
            <div class="column" style={{ background: "rgb(147, 88, 88)" }}>
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
