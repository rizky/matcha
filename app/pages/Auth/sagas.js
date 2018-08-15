import { put, takeLatest, call } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN,
  LOGOUT,
  setUser,
  SIGNUP,
  unsetUser,
  CONFIRMATION,
} from 'app/pages/Auth/actions';
import * as userServices from 'app/services/users';
import { toast, showLoader, hideLoader } from 'app/components/Layout/actions';

function* logInWorker(action) {
  const { username, password } = action;
  try {
    yield put(showLoader());
    const user = yield call(userServices.login, username, password);
    yield put(setUser(user));
    yield put(hideLoader());
    yield Actions.reset('feed');
  } catch (err) {
    yield put(hideLoader());
    yield put(toast(err.message));
  }
}

function* logInSaga() {
  yield takeLatest(LOGIN, logInWorker);
}

function* logOutWorker() {
  yield put(unsetUser());
  yield Actions.reset('login');
}

function* logOutSaga() {
  yield takeLatest(LOGOUT, logOutWorker);
}

function* signUpWorker(action) {
  const { user } = action;
  try {
    yield put(showLoader());
    yield call(userServices.post, user);
    yield put(hideLoader());
    yield Actions.reset('confirmation');
  } catch (err) {
    yield put(hideLoader());
    yield put(toast(err.message));
  }
}

function* signUpSaga() {
  yield takeLatest(SIGNUP, signUpWorker);
}

function* confirmationWorker(action) {
  const { email, token } = action;
  try {
    yield put(showLoader());
    const user = yield call(userServices.confirmation, email, token);
    yield put(setUser(user));
    yield put(hideLoader());
    yield Actions.reset('feed');
  } catch (err) {
    yield put(hideLoader());
    yield put(toast(err.message));
  }
}

function* confirmationSaga() {
  yield takeLatest(CONFIRMATION, confirmationWorker);
}

export default [logInSaga, logOutSaga, signUpSaga, confirmationSaga];
export { signUpWorker, logInWorker };
