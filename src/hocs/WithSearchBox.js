import React from 'react'
import SearchForm from '../components/Shared/SearchFrom';

const withSearchBox = CreateModalComponent => WrappedComponent => {
  return class HOC extends React.Component {
    state = {
      tmpSearchKeywords: {
        column: "name",
        condition: "",
        keyword: ""
      },
      searchKeywords: {},
    }

    handleChange = (e) => {
      e.preventDefault()
      this.setState({
        tmpSearchKeywords: {
          ...this.state.tmpSearchKeywords,
          [e.target.name]: e.target.value,
        }
      })
    }

    makeSearchObject = ({ condition, column, keyword }) => {
      this.setState({
        searchKeywords: condition ? {[`${column}_${condition}`]: keyword} : {[`${column}`]: keyword}
      })
    }

    execSearch = (e) => {
      e.preventDefault()
      this.makeSearchObject(this.state.tmpSearchKeywords)
    }

    render () {
      return (
        <React.Fragment>
          <nav className="navbar" role="navigation" aria-label="main navigation" style={{ background: "#17a2b8", fontSize: "1.2rem" }}>
            <div className="navbar-brand">
              <div className="navbar-item" style={{ color: "#ffffff" }}>
                <nav className="level">
                  <div className="level-left">
                    <div className="level-item">
                      
                    </div>
                  </div>

                  <div className="level-right">
                    <div className="level-item">
                      TOOLBOX
                    </div>
                    <div className="level-item">
                      <CreateModalComponent {...this.props} />
                    </div>
                    <div className="level-item">
                      <SearchForm
                        {...this.state}
                        handleChange={this.handleChange}
                        execSearch={this.execSearch}
                      />
                    </div>
                  </div>
                </nav>
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