import { put, takeLeading } from 'redux-saga/effects';
import { callLambda } from '../utils';
import { findListByID } from './achievements';
import { showLoader, hideLoader } from './loader';

const findUserByEmail = () => ({
  type: 'FIND_USER_BY_EMAIL_BEGIN',
});

function* doFindUserByEmail() {
  yield put(showLoader());

  try {
    const response = yield callLambda('find-user-by-email', 'POST');
    const { findUserByEmail: responseData } = response.data;

    if (!responseData) {
      // TODO: turn into an action.
      yield callLambda('create-user', 'POST');
    }

    yield put({ type: 'FIND_USER_BY_EMAIL_SUCCESS', data: responseData });

    const listId = responseData.lists.data[0]._id; // eslint-disable-line no-underscore-dangle
    yield put(findListByID(listId, false));
  } catch (error) {
    yield put({ type: 'ERROR', error });
  }
  yield put(hideLoader());
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
