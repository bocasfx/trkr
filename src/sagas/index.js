import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { watchFindUserByEmail, reducer as user } from './user';
import {
  watchFindTrackerById,
  watchCreateAchievement,
  watchDeleteAchievement,
  reducer as achievements,
} from './achievements';
import { reducer as trackers, watchCreateTracker, watchDeleteTracker } from './trackers';
import { reducer as sideMenu } from './side-menu';
import { reducer as settings } from './settings';
import { reducer as selectedTracker } from './selected-tracker';
import { reducer as error } from './error';
import { reducer as loader } from './loader';

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
