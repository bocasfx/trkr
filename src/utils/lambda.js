import { generateHeaders } from './identity';

const callLambda = (lambda, method = 'GET', body = '') => generateHeaders()
  .then(headers => fetch(`/.netlify/functions/${lambda}`, {
    method,
    headers,
    body,
  }))
  .then(response => response.text())
  .then(response => JSON.parse(response));

export { callLambda };
