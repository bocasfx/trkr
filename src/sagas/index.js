import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { watchFindUserByEmail, reducer as user } from './user';
import { reducer as lists } from './lists';
import { reducer as sideMenu } from './side-menu';

function* rootSaga() {
  yield all([
    watchFindUserByEmail(),
  ]);
}

const rootReducer = combineReducers({
  user,
  lists,
  sideMenu,
});

export {
  rootSaga,
  rootReducer,
};
