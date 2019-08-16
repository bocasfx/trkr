import { UPDATE_AUTH_STATUS } from '../actions/constants';

const initialState = {
  isAuthenticated: false,
  userId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH_STATUS: {
      const { isAuthenticated, userId } = action;
      return {
        ...state,
        isAuthenticated,
        userId,
      };
    }
    default:
      return state;
  }
};

export default reducer;
