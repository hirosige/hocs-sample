import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import gql from "graphql-tag";

const DELETE_A_DOG = gql`
  mutation DeleteDog($id: ID!) {
    deleteDog(id: $id) {
      id
    }
  }
`;

const CountryDeleteMutation = ({ deleteId }) => (
  <ApolloConsumer>
    {client => (
      <div>
        <button
          className="button is-small is-danger"
          onClick={async () => {
            const { data } = await client.mutate({
              mutation: DELETE_A_DOG,
              variables: { id: deleteId },
            });
            console.log(data)
          }}
        >
          DELETE
        </button>
      </div>
    )}
  </ApolloConsumer>
)

export default CountryDeleteMutation