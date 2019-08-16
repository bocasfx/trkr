import { UPDATE_AUTH_STATUS } from './constants';

const updateAuthStatus = (isAuthenticated, userId) => {
  return {
    type: UPDATE_AUTH_STATUS,
    isAuthenticated,
    userId,
  };
};

export { updateAuthStatus };
