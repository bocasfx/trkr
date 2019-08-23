import { all } from 'redux-saga/effects';
import { watchFindUserByEmail } from './user';

export default function* rootSaga() {
  yield all([
    watchFindUserByEmail(),
  ]);
};