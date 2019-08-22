import gqlClient from './GraphQL/GQLClient';
import { createUser as mutation } from './GraphQL/queries';

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
    .mutate({ mutation, variables })
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
