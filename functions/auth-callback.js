import getUserData from './utils/getUserData';
import oauth2 from './utils/oauth';
import {
  // eslint-disable-next-line camelcase
  redirect_uri,
  clientId,
  clientSecret,
} from './config';

/* Function to handle auth callback */
exports.handler = (event, context, callback) => {
  /* state helps mitigate CSRF attacks & Restore the previous state of your app */
  const { code, state } = event.queryStringParameters;
  console.log(`********** ${code} ${state}`);

  /* Take the grant code and exchange for an accessToken */
  oauth2.authorizationCode.getToken({
    code,
    redirect_uri,
    scope: 'name,email',
  })
    .then((result) => {
      // const token = oauth2.accessToken.create(result);
      console.log('accessToken', result);
      // return token;
    })
    // // Get more info about the user
    // .then(getUserData)
    // // Do stuff with user data & token
    // .then((result) => {
    //   console.log('auth token', result.token);
    //   // Do stuff with user data
    //   console.log('user data', result.data);
    //   // Do other custom stuff
    //   console.log('state', state);
    //   // return results to browser
    //   return callback(null, {
    //     statusCode: 200,
    //     body: JSON.stringify(result),
    //   });
    // })
    .catch((error) => {
      console.log('Access Token Error', error.message);
      console.log(error);
      return callback(null, {
        statusCode: error.statusCode || 500,
        body: JSON.stringify({
          error: error.message,
        }),
      });
    });
};
