const initialState = {
  loading: true,
};

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case 'SHOW_LOADER':
      return {
        loading: true,
      };

    case 'HIDE_LOADER':
      return {
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
