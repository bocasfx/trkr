import gql from 'graphql-tag';
import gqlClient from './utils/GQLClient';

const query = gql`
  query testQuery {
    allLists {
      data {
        title
      }
    }
  }
`;

exports.handler = (event, context, callback) => {
  gqlClient
    .query({ query })
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
