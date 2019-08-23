import { put, takeLeading } from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

const findUserByEmail = () => ({
  type: 'FIND_USER_BY_EMAIL_BEGIN',
});

function* doFindUserByEmail() {
  yield delay(3000);
  yield put({ type: 'FIND_USER_BY_EMAIL_SUCCESS' });
}

function* watchFindUserByEmail() {
  yield takeLeading('FIND_USER_BY_EMAIL_BEGIN', doFindUserByEmail);
}

export {
  findUserByEmail,
  watchFindUserByEmail,
};
