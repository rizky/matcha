import { put, takeLatest } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN,
  LOGOUT,
  ON_RESET_PASSWORD,
  clearUserId,
  setUserId,
} from 'app/pages/Auth/actions';
import { setScreen } from 'app/pages/App/actions';
import { SCREENS } from 'app/pages/App/constants';

// worker Saga: will be fired on LOGIN action
function* onLogin(loginAction) {
  yield put(setUserId(loginAction.userId));
  yield Actions.home();
}

function* loginSaga() {
  yield takeLatest(LOGIN, onLogin);
}

// worker Saga: will be fired on LOGOUT action
function* onLogout() {
  yield put(clearUserId());
  yield put(setScreen(SCREENS.HOME));
  yield Actions.reset('login');
}

function* logoutSaga() {
  yield takeLatest(LOGOUT, onLogout);
}

function* onResetPassword(action) {
  console.log(action);
}

function* resetPassword() {
  yield takeLatest(ON_RESET_PASSWORD, onResetPassword);
}

export default [loginSaga, logoutSaga, resetPassword];
