import { put, takeLeading } from 'redux-saga/effects';
import { callLambda } from '../../utils';
import {
  findTrackerByID,
  showLoader,
  hideLoader,
  publishError,
  findUserByEmailSuccess,
} from '../actions';

function* watchFindUserByEmail() {
  yield takeLeading('FIND_USER_BY_EMAIL_BEGIN', function* doFindUserByEmail() {
    yield put(showLoader());

    try {
      const response = yield callLambda('find-user-by-email', 'POST');
      const { findUserByEmail: responseData } = response.data;

      if (!responseData) {
        // TODO: turn into an action.
        yield callLambda('create-user', 'POST');
      }

      yield put(findUserByEmailSuccess(responseData));

      // eslint-disable-next-line no-underscore-dangle
      const trackerId = responseData.trackers.data[0]._id;
      yield put(findTrackerByID(trackerId, false));
    } catch (error) {
      yield put(publishError(error));
    }
    yield put(hideLoader());
  });
}

export { watchFindUserByEmail };
