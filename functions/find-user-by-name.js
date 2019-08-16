import gql from 'graphql-tag';
import gqlClient from './GraphQL/GQLClient';

const query = gql`
  query FindUserByName($name: String) {
    findUserByName(name: $name) {
      _id
    }
  }
`;

exports.handler = (event, context, callback) => {
  const { username: name } = JSON.parse(event.body);
  if (!name) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Invalid username.',
      }),
    });
    return;
  }

  const variables = { name };
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
