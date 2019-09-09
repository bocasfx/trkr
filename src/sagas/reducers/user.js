const reducer = (state = {}, action) => {
  const { data, type } = action;
  switch (type) {
    case 'FIND_USER_BY_EMAIL_SUCCESS':
      return {
        id: data._id, // eslint-disable-line no-underscore-dangle
        email: data.email,
      };

    default:
      return state;
  }
};

export default reducer;
