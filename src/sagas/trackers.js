import { put, takeLeading } from 'redux-saga/effects';
import { callLambda } from '../utils';
import { addTracker } from '../utils/trackers';

const createTracker = (name, id) => ({
  type: 'CREATE_TRACKER',
  name,
  id,
});

function* doCreateTracker(action) {
  const { name, id } = action;
  try {
    yield callLambda('create-tracker', 'POST', { name, id });
    const data = { name, id };
    yield put({ type: 'CREATE_TRACKER_SUCCESS', data });
  } catch (error) {
    yield put({ type: 'ERROR', error });
  }
}

function* watchCreateTracker() {
  yield takeLeading('CREATE_TRACKER', doCreateTracker);
}

const reducer = (state = [], action) => {
  const { data, type } = action;
  switch (type) {
    case 'FIND_USER_BY_EMAIL_SUCCESS':
      // eslint-disable-next-line no-underscore-dangle
      return data.trackers.data.map(item => ({ name: item.name, id: item._id }));

    case 'CREATE_TRACKER_SUCCESS':
      return addTracker(state, data);

    default:
      return state;
  }
};

export {
  watchCreateTracker,
  createTracker,
  reducer,
};
