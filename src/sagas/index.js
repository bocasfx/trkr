import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { watchFindUserByEmail, reducer as user } from './user';
import { reducer as lists } from './lists';

function* rootSaga() {
  yield all([
    watchFindUserByEmail(),
  ]);
}

const rootReducer = combineReducers({
  user,
  lists,
});

export {
  rootSaga,
  rootReducer,
};
