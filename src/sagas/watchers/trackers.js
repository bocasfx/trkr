import { put, takeLeading } from 'redux-saga/effects';
import {
  callLambda,
  categorizeAchievements,
} from '../../utils';
import {
  findTrackerByIDSuccess,
  publishError,
  showLoader,
  hideLoader,
  setSelectedTracker,
  findTrackerByID,
} from '../actions';

function* watchFindTrackerById() {
  yield takeLeading('FIND_TRACKER_BY_ID', function* doFindTrackerByID(action) {
    const { id, withLoader } = action;
    if (withLoader) {
      yield put(showLoader());
    }
    try {
      const response = yield callLambda('find-tracker-by-id', 'POST', { id });
      const responseData = response.data.findTrackerByID.achievements.data;
      const categorizedData = categorizeAchievements(responseData);
      yield put(findTrackerByIDSuccess(categorizedData));
      yield put(setSelectedTracker(id));
    } catch (error) {
      yield put(publishError(error));
    }
    if (withLoader) {
      yield put(hideLoader());
    }
  });
}

function* watchCreateTracker() {
  yield takeLeading('CREATE_TRACKER', function* doCreateTracker(action) {
    const { name, id } = action;
    try {
      const response = yield callLambda('create-tracker', 'POST', { name, id });
      const trackerId = response.data.createTracker._id; // eslint-disable-line no-underscore-dangle
      const data = { name, id: trackerId };
      yield put({ type: 'CREATE_TRACKER_SUCCESS', data });
      yield put(findTrackerByID(trackerId));
      yield put(setSelectedTracker(trackerId));
    } catch (error) {
      yield put({ type: 'ERROR', error });
    }
  });
}

function* watchDeleteTracker() {
  yield takeLeading('DELETE_TRACKER', function* doDeleteTracker(action) {
    const { id } = action;
    try {
      yield callLambda('delete-tracker', 'POST', { id });
      yield put({ type: 'DELETE_TRACKER_SUCCESS', data: id });
    } catch (error) {
      yield put({ type: 'ERROR', error });
    }
  });
}

export {
  watchFindTrackerById,
  watchCreateTracker,
  watchDeleteTracker,
};
