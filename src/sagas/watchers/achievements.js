import { put, takeEvery } from 'redux-saga/effects';
import { callLambda } from '../../utils';

import { publishError, createAchievementSuccess } from '../actions';

function* watchCreateAchievement() {
  yield takeEvery('CREATE_ACHIEVEMENT', function* doCreateAchievement(action) {
    const achievement = action.data;
    try {
      const response = yield callLambda('create-achievement', 'POST', achievement);
      yield put(createAchievementSuccess(response.data.createAchievement));
    } catch (error) {
      yield put(publishError(error));
    }
  });
}

function* watchDeleteAchievement() {
  yield takeEvery('DELETE_ACHIEVEMENT', function* doDeleteAchievement(action) {
    const achievement = action.data;
    const { _id } = achievement;
    try {
      yield callLambda('delete-achievement', 'POST', { id: _id });
      yield put({ type: 'DELETE_ACHIEVEMENT_SUCCESS', data: achievement });
    } catch (error) {
      yield put(publishError(error));
    }
  });
}

export {
  watchCreateAchievement,
  watchDeleteAchievement,
};
