const initialState = {
  viewFullYear: true,
};

const displayFullYear = (viewFullYear, viewMonth) => ({
  type: 'DISPLAY_FULL_YEAR',
  viewFullYear,
  viewMonth,
});

const reducer = (state = initialState, action) => {
  const { type, viewFullYear, viewMonth } = action;
  switch (type) {
    case 'DISPLAY_FULL_YEAR':
      return {
        viewFullYear,
        viewMonth,
      };

    default:
      return state;
  }
};

export {
  displayFullYear,
  reducer,
};
