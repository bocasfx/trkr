const initialState = {
  isOpen: false,
};

const closeMenu = () => ({
  type: 'CLOSE_MENU',
});

const toggleMenu = isOpen => ({
  type: 'TOGGLE_MENU',
  isOpen,
});

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

    case 'FIND_LIST_BY_ID_SUCCESS':
      return {
        isOpen: false,
      };

    default:
      return state;
  }
};

export {
  closeMenu,
  toggleMenu,
  reducer,
};
