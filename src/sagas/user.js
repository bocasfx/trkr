import { put, takeLeading } from 'redux-saga/effects';
import { callLambda } from '../utils';

const findUserByEmail = () => ({
  type: 'FIND_USER_BY_EMAIL_BEGIN',
});

function* doFindUserByEmail() {
  try {
    const response = yield callLambda('find-user-by-email', 'POST');
    const { findUserByEmail: responseData } = response.data;

    if (!responseData) {
      yield callLambda('create-user', 'POST');
    }

    yield put({ type: 'FIND_USER_BY_EMAIL_SUCCESS', data: responseData });
  } catch (err) {
    yield put({ type: 'FIND_USER_BY_EMAIL_FAILURE' });
  }
}

function* watchFindUserByEmail() {
  yield takeLeading('FIND_USER_BY_EMAIL_BEGIN', doFindUserByEmail);
}

const reducer = (state = {}, action) => {
  const { data, type } = action;
  switch (type) {
    case 'FIND_USER_BY_EMAIL_SUCCESS':
      return {
        id: data._id, // eslint-disable-line no-underscore-dangle
        email: data.email,
      };

    default:
      return state;
  }
};

export {
  findUserByEmail,
  watchFindUserByEmail,
  reducer,
};
