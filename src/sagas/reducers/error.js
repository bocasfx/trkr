const reducer = (state = null, action) => {
  const { type, error } = action;
  switch (type) {
    case 'ERROR':
      return error;

    default:
      return state;
  }
};

export default reducer;
