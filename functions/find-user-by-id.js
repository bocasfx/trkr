import gqlClient from './GraphQL/GQLClient';
import getId from './utils/getId';
import { findUserById as query } from './GraphQL/queries';

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
