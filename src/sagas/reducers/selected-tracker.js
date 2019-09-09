const reducer = (state = null, action) => {
  const { type, id } = action;
  switch (type) {
    case 'SET_SELECTED_TRACKER':
      return id;

    default:
      return state;
  }
};

export default reducer;
