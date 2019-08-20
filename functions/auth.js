import oauth2 from './utils/oauth';
// eslint-disable-next-line camelcase
import { redirect_uri } from './config';

/* Do initial auth redirect */
exports.handler = (event, context, callback) => {
  /* Generate authorizationURI */
  const authorizationURI = oauth2.authorizationCode.authorizeURL({
    redirect_uri,
    scope: 'name,email',
    state: 'some state',
  });

  /* Redirect user to authorizationURI */
  const response = {
    statusCode: 302,
    headers: {
      Location: authorizationURI,
      'Cache-Control': 'no-cache', // Disable caching of this response
    },
    body: '', // return body for local dev
  };

  return callback(null, response);
};
