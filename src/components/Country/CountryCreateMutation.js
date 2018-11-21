import React from 'react'
import { Mutation } from "react-apollo";
import { compose } from 'recompose'
import withModal from '../../hocs/WithModal';
import HorizontalInputBoxFrame from '../Shared/HorizontalInputBoxFrame';
import { CREATE_COUNTRY } from '../../queries/Country'

const CountryCreateMutation = (props) => {
  let name
  let code
  let slug

  return (
    <React.Fragment>
      <Mutation
        mutation={CREATE_COUNTRY}
      >
        {(createCountry, { data }) => (
          <form onSubmit={e => {
            e.preventDefault();
            createCountry({ variables: {
              name: name.value,
              code: code.value,
              slug: slug.value,
            }});
            name.value = "";
            code.value = "";
            slug.value = "";
            }}
          >
          <header className="modal-card-head" style={{ borderRadius: 0, background: "#007BFF" }}>
            <p className="modal-card-title" style={{ color: "#ffffff" }} >CREATE COUNTRY</p>
            <div className="delete" aria-label="close" onClick={props.switchModal}></div>
          </header>
          <section className="modal-card-body" style={{ color: "#444444" }}>
            <HorizontalInputBoxFrame
              columnName="Name"
              notice="Do not enter the first zero"
            >
              <input ref={node => { name = node; }} className="input" type="text" placeholder="Name" />
            </HorizontalInputBoxFrame>
            <HorizontalInputBoxFrame
              columnName="Code"
              notice="Do not enter the first zero"
            >
              <input ref={node => { code = node; }} className="input" type="text" placeholder="Code" />
            </HorizontalInputBoxFrame>
            <HorizontalInputBoxFrame
              columnName="Slug"
              notice="Do not enter the first zero"
            >
              <input ref={node => { slug = node; }} className="input" type="text" placeholder="Slug" />
            </HorizontalInputBoxFrame>
          </section>
          <footer className="modal-card-foot" style={{ borderRadius: 0 }}>
            <button className="button is-success" type="submit">SUBMIT</button>
            <div className="button" onClick={props.switchModal}>CANCEL</div>
          </footer>
        </form>
        )}
      </Mutation>
    </React.Fragment>
  )
}

export default compose(
  withModal('CREATE COUNTRY')
)(CountryCreateMutation)