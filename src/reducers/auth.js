import { SET_USER_EMAIL } from '../actions/constants';

const initialState = {
  email: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_EMAIL: {
      const { email } = action;
      return {
        ...state,
        email,
      };
    }
    default:
      return state;
  }
};

export default reducer;
