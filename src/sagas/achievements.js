import { put, takeLeading } from 'redux-saga/effects';
import { callLambda, categorizeAchievements } from '../utils';
import { setSelectedList } from './selected-list';

const findListByID = id => ({
  type: 'FIND_LIST_BY_ID',
  id,
});

function* doFindListByID(action) {
  const { id } = action;
  try {
    const response = yield callLambda('find-list-by-id', 'POST', { id });
    const responseData = response.data.findListByID.achievements.data;
    console.log(responseData);
    const categorizedData = categorizeAchievements(responseData);
    yield put({ type: 'FIND_LIST_BY_ID_SUCCESS', data: categorizedData });
    yield put(setSelectedList(id));
  } catch (err) {
    yield put({ type: 'FIND_LIST_BY_ID_FAILURE' });
  }
}

function* watchFindListById() {
  yield takeLeading('FIND_LIST_BY_ID', doFindListByID);
}

// ------------------------------------------

const createAchievement = (year, month, day, list) => ({
  type: 'CREATE_ACHIEVEMENT',
  year,
  month,
  day,
  list,
});

function* doCreateAchievement(achievement) {
  try {
    const response = yield callLambda('create-achievement', 'POST', achievement);
    console.log(response);
    yield put({ type: 'CREATE_ACHIEVEMENT_SUCCESS', data: response });
  } catch (err) {
    yield put({ type: 'CREATE_ACHIEVEMENT_FAILURE' });
  }
}

function* watchCreateAchievement() {
  yield takeLeading('CREATE_ACHIEVEMENT', doCreateAchievement);
}

// ------------------------------------------

const reducer = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case 'FIND_LIST_BY_ID_SUCCESS':
      return data;

    case 'CREATE_ACHIEVEMENT_SUCCESS':
      return [
        ...state,
        data,
      ];

    default:
      return state;
  }
};

export {
  findListByID,
  watchFindListById,
  createAchievement,
  watchCreateAchievement,
  reducer,
};
