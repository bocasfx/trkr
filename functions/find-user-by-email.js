import gql from 'graphql-tag';
import gqlClient from './GraphQL/GQLClient';

const query = gql`
  query FindUserByEmail($email: String) {
    findUserByEmail(email: $email) {
      _id
      email
      lists {
        data {
          title
        }
      }
    }
  }
`;

exports.handler = (event, context, callback) => {
  const { identity, user } = context.clientContext;
  if (!identity) {
    callback(null, {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' }),
    });
    return;
  }
  const { email } = user;
  if (!email) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Invalid user data.',
      }),
    });
    return;
  }

  const variables = { email };
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
