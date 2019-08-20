import simpleOauth from 'simple-oauth2';
import {
  clientId,
  clientSecret,
  tokenHost,
  tokenPath,
  authorizePath,
} from '../config';

function authInstance(credentials) {
  if (!credentials.client.id) {
    throw new Error('MISSING REQUIRED ENV VARS. Please set AUTH0_CLIENT_ID');
  }
  if (!credentials.client.secret) {
    throw new Error('MISSING REQUIRED ENV VARS. Please set AUTH0_CLIENT_SECRET');
  }
  // return oauth instance
  return simpleOauth.create(credentials);
}

/* Create oauth2 instance to use in our two functions */
export default authInstance({
  client: {
    id: clientId,
    secret: clientSecret,
  },
  auth: {
    tokenHost,
    tokenPath,
    authorizePath,
  },
});
