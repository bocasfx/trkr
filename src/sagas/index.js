import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { watchFindUserByEmail, reducer as user } from './user';
import { watchFindListById, watchCreateAchievement, watchDeleteAchievement, reducer as achievements } from './achievements';
import { reducer as lists } from './lists';
import { reducer as sideMenu } from './side-menu';
import { reducer as settings } from './settings';
import { reducer as selectedList } from './selected-list';
import { reducer as error } from './error';

function* rootSaga() {
  yield all([
    watchFindUserByEmail(),
    watchFindListById(),
    watchCreateAchievement(),
    watchDeleteAchievement(),
  ]);
}

const rootReducer = combineReducers({
  user,
  lists,
  sideMenu,
  achievements,
  settings,
  selectedList,
  error,
});

export {
  rootSaga,
  rootReducer,
};
