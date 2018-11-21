import React from 'react'
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import PageItems from './PageItems';


const PaginationPlane = (props) => (
  <nav className="navbar" role="navigation" aria-label="main navigation" style={{ background: "#444444", margin: 0 }}>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item">
          <nav className="pagination is-centered is-small" role="navigation" aria-label="pagination">
            <PreviousButton
              current={props.currentPage}
              previousPage={props.previousPage}
            />
            <NextButton
              lastPage={props.lastPage}
              current={props.currentPage}
              nextPage={props.nextPage}
            />
            <PageItems
              current={props.currentPage}
              lastPage={props.lastPage}
              movePage={props.movePage}
            />
          </nav>
        </div>
      </div>
    </div>
  </nav>
)

export default PaginationPlane