import { put, takeLeading, takeEvery } from 'redux-saga/effects';
import {
  callLambda,
  categorizeAchievements,
  addAchievement,
  removeAchievement,
  updateAchievement,
} from '../utils';
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
    const categorizedData = categorizeAchievements(responseData);
    yield put({ type: 'FIND_LIST_BY_ID_SUCCESS', data: categorizedData });
    yield put(setSelectedList(id));
  } catch (error) {
    yield put({ type: 'ERROR', error });
  }
}

function* watchFindListById() {
  yield takeLeading('FIND_LIST_BY_ID', doFindListByID);
}

// ------------------------------------------

const createAchievement = achievement => ({
  type: 'CREATE_ACHIEVEMENT',
  data: achievement,
});

function* doCreateAchievement(action) {
  const achievement = action.data;
  try {
    const response = yield callLambda('create-achievement', 'POST', achievement);
    yield put({ type: 'CREATE_ACHIEVEMENT_SUCCESS', data: response.data.createAchievement });
  } catch (error) {
    yield put({ type: 'ERROR', error });
  }
}

function* watchCreateAchievement() {
  yield takeEvery('CREATE_ACHIEVEMENT', doCreateAchievement);
}

// ------------------------------------------

const deleteAchievement = achievement => ({
  type: 'DELETE_ACHIEVEMENT',
  data: achievement,
});

function* doDeleteAchievement(action) {
  const achievement = action.data;
  const { _id } = achievement;
  try {
    yield callLambda('delete-achievement', 'POST', { id: _id });
    yield put({ type: 'DELETE_ACHIEVEMENT_SUCCESS', data: achievement });
  } catch (error) {
    yield put({ type: 'ERROR', error });
  }
}

function* watchDeleteAchievement() {
  yield takeEvery('DELETE_ACHIEVEMENT', doDeleteAchievement);
}

// ------------------------------------------

const reducer = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'FIND_LIST_BY_ID_SUCCESS':
      return data;

    case 'CREATE_ACHIEVEMENT':
      return addAchievement(state, {
        ...data,
        completed: false,
        pending: true,
      });

    case 'CREATE_ACHIEVEMENT_SUCCESS':
      return addAchievement(removeAchievement(state, data), {
        ...data,
        pending: false,
      });

    case 'DELETE_ACHIEVEMENT':
      return updateAchievement(state, {
        ...data,
        completed: true,
        pending: true,
      });

    case 'DELETE_ACHIEVEMENT_SUCCESS':
      return removeAchievement(state, data);

    default:
      return state;
  }
};

export {
  findListByID,
  watchFindListById,
  createAchievement,
  watchCreateAchievement,
  deleteAchievement,
  watchDeleteAchievement,
  reducer,
};
