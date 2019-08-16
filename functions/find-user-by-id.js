import gql from 'graphql-tag';
import gqlClient from './GraphQL/GQLClient';
import getId from './utils/getId';

const query = gql`
  query testQuery($id: ID!) {
    findUserByID(id: $id) {
      name
      _id
      lists {
        data {
          title
        }
      }
    }
  }
`;

exports.handler = (event, context, callback) => {
  const id = getId(event.path);
  const variables = { id };
  gqlClient
    .query({ query, variables })
    .then((response) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: 400,
        body: JSON.stringify(err),
      });
    });
};
