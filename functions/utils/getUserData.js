import request from 'request';
import querystring from 'querystring';
import {
  clientId,
  clientSecret,
  appId,
  profilePath,
} from '../config';

/* promisify request call */
function requestWrapper(requestOptions, token) {
  return new Promise((resolve, reject) => {
    request(requestOptions, (err, response, body) => {
      if (err) {
        return reject(err);
      }
      // return data
      return resolve({
        token,
        data: body,
      });
    });
  });
}

/* Call into https://app.intercom.io/me and return user data */
export default function getUserData(token) {
  const postData = querystring.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    app_id: appId,
  });

  const requestOptions = {
    url: `${profilePath}?${postData}`,
    json: true,
    auth: {
      user: token.token.token,
      pass: '',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  };

  return requestWrapper(requestOptions, token);
}
