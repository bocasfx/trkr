import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
  secret: 'fnADVr6A-rACDec0gdM07iLOoy1THsP8uCN1J5Wg',
});

exports.handler = () => {
  console.log('Function `list-read-all` invoked');
  return client
    .query(q.Paginate(q.Match(q.Ref('indexes/allLists'))))
    .then((response) => {
      const listRefs = response.data;
      console.log('list refs', listRefs);
      console.log(`${listRefs.length} lists found`);
      // create new query out of list refs. http://bit.ly/2LG3MLg
      const getAllListDataQuery = listRefs.map(ref => q.Get(ref));
      // then query the refs
      return client.query(getAllListDataQuery).then(ret => ({
        statusCode: 200,
        body: JSON.stringify(ret),
      }));
    })
    .catch((error) => {
      console.log('error', error);
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
