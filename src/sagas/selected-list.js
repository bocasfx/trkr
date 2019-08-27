const setSelectedList = listId => ({
  type: 'SET_SELECTED_LIST',
  id: listId,
});

const reducer = (state = null, action) => {
  const { type, id } = action;
  switch (type) {
    case 'SET_SELECTED_LIST':
      return id;

    default:
      return state;
  }
};

export {
  setSelectedList,
  reducer,
};
