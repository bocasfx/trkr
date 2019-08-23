const reducer = (state = [], action) => {
  const { data, type } = action;
  switch (type) {
    case 'FIND_USER_BY_EMAIL_SUCCESS':
      // eslint-disable-next-line no-underscore-dangle
      return data.lists.data.map(item => ({ name: item.name, id: item._id }));

    default:
      return state;
  }
};

export { reducer };
