/* process.env.URL from netlify BUILD environment variables */
const siteUrl = process.env.URL || 'http://localhost:3000';

const auth0Api = 'https://trkr.auth0.com/authorize';
// https://trkr.auth0.com/authorize?
//  scope=appointments%20contacts&
//  audience=https%3A%2F%2Ftrkr.auth0.com%2Fapi%2Fv2%2F&
//  response_type=code&
//  client_id=vs4HAin8dv1HGYa8H7idyTLKvSsX01NO&
//  redirect_uri=http://localhost:9000/.netlify/functions/auth-callback

const appId = process.env.AUTH0_APP_ID;
const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;
const tokenHost = auth0Api;
const authorizePath = `${auth0Api}/authorize`;
const tokenPath = `${auth0Api}/auth/eagle/token`;
const profilePath = `${auth0Api}/me/`;

// eslint-disable-next-line camelcase
const redirect_uri = `${siteUrl}/.netlify/functions/auth-callback`;

export {
  appId,
  clientId,
  clientSecret,
  tokenHost,
  authorizePath,
  tokenPath,
  profilePath,
  // eslint-disable-next-line camelcase
  redirect_uri,
};
