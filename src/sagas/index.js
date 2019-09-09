import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

import {
  watchFindTrackerById,
  watchCreateAchievement,
  watchDeleteAchievement,
  watchCreateTracker,
  watchDeleteTracker,
  watchFindUserByEmail,
} from './watchers';

import {
  achievements,
  error,
  loader,
  selectedTracker,
  settings,
  sideMenu,
  trackers,
  user,
} from './reducers';

function* rootSaga() {
  yield all([
    watchFindUserByEmail(),
    watchFindTrackerById(),
    watchCreateAchievement(),
    watchDeleteAchievement(),
    watchCreateTracker(),
    watchDeleteTracker(),
  ]);
}

const rootReducer = combineReducers({
  user,
  trackers,
  sideMenu,
  achievements,
  settings,
  selectedTracker,
  error,
  loader,
});

export { rootSaga, rootReducer };
