// @flow
import type { Saga } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { loadUsers, ON_LOAD_USERS } from 'src/pages/Discover/actions';

function* onLoadUsers() {
  try {
    const response = yield call(fetch, 'http://localhost:81/users');
    const users = yield call([response, response.json]);
    yield put(loadUsers(users));
  } catch (e) {
    console.log(e);
  }
}

function* loadUsersSaga(): Saga<void> {
  yield takeEvery(ON_LOAD_USERS, onLoadUsers);
}

export default [loadUsersSaga];
