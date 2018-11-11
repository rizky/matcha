// @flow
import type { Saga } from 'redux-saga';
import { put, takeLatest, call } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN,
  LOGOUT,
  setUser,
  unsetUser,
  type LoginAction,
} from 'src/pages/Auth/actions';
import * as oAuthServices from 'src/services/oAuth42';
import { toast, showLoader, hideLoader } from 'src/components/Layout/actions';

function* logInWorker({ code }: LoginAction): Saga<void> {
  try {
    yield put(showLoader());
    yield Actions.reset('root');
    const accessToken = yield call(oAuthServices.getToken, code);
    const userId = yield call(oAuthServices.getTokenInfo, accessToken);
    const user = yield call(oAuthServices.getUser, accessToken, userId);
    yield put(setUser(user));
    yield put(hideLoader());
    yield Actions.replace('profile');
  } catch (err) {
    yield put(hideLoader());
    yield put(toast(err.message));
  }
}

function* logInSaga(): Saga<void> {
  yield takeLatest(LOGIN, logInWorker);
}

function* logOutWorker() {
  yield put(unsetUser());
  yield Actions.reset('login');
}

function* logOutSaga(): Saga<void> {
  yield takeLatest(LOGOUT, logOutWorker);
}

export default [logInSaga, logOutSaga];
export { logInWorker };
