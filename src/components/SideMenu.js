import React from 'react'
import { compose } from 'recompose'
import withActiveMenu from '../hocs/WithActiveMenu';
import hasLogger from '../hocs/HasLogger';

const SideMenu = (props) => (
  <React.Fragment>
    <nav class="navbar" role="navigation" aria-label="main navigation" style={{ background: "#444444", fontSize: "1.2rem" }}>
      <div class="navbar-brand">
        <div class="navbar-item" style={{ color: "#ffffff" }}>
          MENU {props.isActive}
        </div>
      </div>
    </nav>
    <div>Side Menu</div>
  </React.Fragment>
)

export default compose(
  withActiveMenu(),
  hasLogger()
)(SideMenu)
