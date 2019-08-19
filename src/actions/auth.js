import { SET_USER_EMAIL } from './constants';

const setUserEmail = email => ({
  type: SET_USER_EMAIL,
  email,
});

export { setUserEmail };
