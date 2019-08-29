import gqlClient from './GraphQL/GQLClient';
import { deleteAchievement as mutation } from './GraphQL/queries';

exports.handler = (event, context, callback) => {
  const { identity } = context.clientContext;
  if (!identity) {
    callback(null, {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' }),
    });
    return;
  }

  const { body } = event;
  const { id } = JSON.parse(body);
  const variables = { id };

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
