import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { watchFindUserByEmail, reducer as user } from './user';
import { watchFindListById, reducer as achievements } from './achievements';
import { reducer as lists } from './lists';
import { reducer as sideMenu } from './side-menu';

function* rootSaga() {
  yield all([
    watchFindUserByEmail(),
    watchFindListById(),
  ]);
}

const rootReducer = combineReducers({
  user,
  lists,
  sideMenu,
  achievements,
});

export {
  rootSaga,
  rootReducer,
};