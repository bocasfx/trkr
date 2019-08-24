import { put, takeLeading } from 'redux-saga/effects';
import { callLambda } from '../utils';

const findListByID = id => ({
  type: 'FIND_LIST_BY_ID',
  id,
});

function* doFindListByID(action) {
  const { id } = action;
  try {
    const response = yield callLambda('find-list-by-id', 'POST', JSON.stringify({ id }));
    const responseData = response.data.findListByID.achievements.data;

    yield put({ type: 'FIND_LIST_BY_ID_SUCCESS', data: responseData });
  } catch (err) {
    yield put({ type: 'FIND_LIST_BY_ID_FAILURE' });
  }
}

function* watchFindListById() {
  yield takeLeading('FIND_LIST_BY_ID', doFindListByID);
}

const reducer = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case 'FIND_LIST_BY_ID_SUCCESS':
      return data;

    default:
      return state;
  }
};

export {
  findListByID,
  watchFindListById,
  reducer,
};
