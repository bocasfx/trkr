import { generateHeaders } from './identity';

const callLambda = (lambda, method = 'POST', body = '') => generateHeaders()
  .then(headers => fetch(`/.netlify/functions/${lambda}`, {
    method,
    headers,
    body: JSON.stringify(body),
  }))
  .then(response => response.text())
  .then(response => JSON.parse(response));

export { callLambda };
