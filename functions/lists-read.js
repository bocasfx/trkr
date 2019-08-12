import faunadb from 'faunadb';
import getId from './utils/getId';

const q = faunadb.query;
const client = new faunadb.Client({
  secret: 'fnADVYwUEDACDe2oHjtBko7ufrHF4MiiUqtpYq_Q',
});

exports.handler = (event, context, callback) => {
  const id = getId(event.path);
  console.log(`Function 'todo-read' invoked. Read id: ${id}`);
  return client
    .query(q.Get(q.Ref(`classes/List/240249168706142723`)))
    .then((response) => {
      console.log('success', response);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      });
    })
    .catch((error) => {
      console.log('error', error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
