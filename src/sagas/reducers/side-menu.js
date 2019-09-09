const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action) => {
  const { type, isOpen } = action;
  switch (type) {
    case 'CLOSE_MENU':
      return {
        isOpen: false,
      };

    case 'TOGGLE_MENU':
      return {
        isOpen,
      };

    case 'FIND_TRACKER_BY_ID':
      return {
        isOpen: false,
      };

    default:
      return state;
  }
};

export default reducer;
