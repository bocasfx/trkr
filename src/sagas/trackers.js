import { put, takeLeading } from 'redux-saga/effects';
import { callLambda } from '../utils';
import { findUserByEmail } from '../../functions/GraphQL/queries';

const createTracker = (name, id) => ({
  type: 'CREATE_TRACKER',
  name,
  id,
});

function* doCreateTracker(action) {
  const { name, id } = action;
  try {
    const response = yield callLambda('create-tracker', 'POST', { name, id });
    console.log(response.data.createTracker._id);
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

    default:
      return state;
  }
};

export {
  watchCreateTracker,
  createTracker,
  reducer,
};
