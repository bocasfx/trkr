exports.handler = (event, context, callback) => {
  console.log('Invoked function');
  return callback(null, {
    statusCode: 200,
  });
};
