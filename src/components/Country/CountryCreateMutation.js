import React from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_COUNTRY = gql`
  mutation CreateCountry(
    $name: String!
    $code: String!
    $slug: String!
  ) {
    createCountry(
      name: $name
      code: $code
      slug: $slug
    ) {
      id
      name
      code
      slug
    }
  }
`;

class CountryCreateMutation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: "",
    }
  }

  switchModal = () => {
    if (this.state.isActive === "is-active") {
      this.setState({ isActive: "" })
    } else {
      this.setState({ isActive: "is-active" })
    }
  }

  render () {
    let name
    let breed

    return (
      <React.Fragment>
        <button className="button is-primary" onClick={this.switchModal}>CREATE COUNTRY</button>
        <div className={`modal ${this.state.isActive}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <Mutation
              mutation={CREATE_COUNTRY}
            >
              {(createCountry, { data }) => (
                <form
                  onSubmit={e => {
                    console.log('test')
                    e.preventDefault();
                    createCountry({ variables: {
                      name: name.value,
                      breed: breed.value
                    }});
                    name.value = "";
                    breed.value = "";
                    this.switchModal()
                  }}
                >
                <header className="modal-card-head">
                  <p className="modal-card-title">CREATE COUNTRY</p>
                  <div className="delete" aria-label="close" onClick={this.switchModal}></div>
                </header>
                <section className="modal-card-body">
                  <input
                    ref={node => {
                      name = node;
                    }}
                  />
                  <input
                    ref={node => {
                      breed = node;
                    }}
                  />
                  </section>
                <footer className="modal-card-foot">
                  <button className="button is-success" type="submit">Save changes</button>
                  <div className="button" onClick={this.switchModal}>Cancel</div>
                </footer>
              </form>
              )}
            </Mutation>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default CountryCreateMutation