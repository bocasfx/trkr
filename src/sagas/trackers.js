import { put, takeLeading } from 'redux-saga/effects';
import { callLambda } from '../utils';
import { addTracker } from '../utils/trackers';
import { setSelectedTracker } from './selected-tracker';
import { findTrackerByID } from './achievements';

const createTracker = (name, id) => ({
  type: 'CREATE_TRACKER',
  name,
  id,
});

function* doCreateTracker(action) {
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
}

function* watchCreateTracker() {
  yield takeLeading('CREATE_TRACKER', doCreateTracker);
}

// ---------------------------------------------------

const deleteTracker = id => ({
  type: 'DELETE_TRACKER',
  id,
});

function* doDeleteTracker(action) {
  const { id } = action;
  try {
    yield callLambda('delete-tracker', 'POST', { id });
    yield put({ type: 'DELETE_TRACKER_SUCCESS', data: id });
  } catch (error) {
    yield put({ type: 'ERROR', error });
  }
}

function* watchDeleteTracker() {
  yield takeLeading('DELETE_TRACKER', doDeleteTracker);
}

const reducer = (state = [], action) => {
  const { data, type } = action;
  switch (type) {
    case 'FIND_USER_BY_EMAIL_SUCCESS':
      // eslint-disable-next-line no-underscore-dangle
      return data.trackers.data.map(item => ({ name: item.name, id: item._id }));

    case 'CREATE_TRACKER_SUCCESS':
      return addTracker(state, data);

    case 'DELETE_TRACKER_SUCCESS':
      return state.filter(tracker => tracker.id !== data);

    default:
      return state;
  }
};

export {
  watchCreateTracker,
  createTracker,
  watchDeleteTracker,
  deleteTracker,
  reducer,
};
