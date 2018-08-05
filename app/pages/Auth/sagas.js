import { put, takeLatest } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN,
  LOGOUT,
  setUser,
  unsetUser,
} from 'app/pages/Auth/actions';

// worker Saga: will be fired on LOGIN action
function* onLogin(action) {
  yield put(setUser(action.user));
  yield Actions.home();
}

function* loginSaga() {
  yield takeLatest(LOGIN, onLogin);
}

// worker Saga: will be fired on LOGOUT action
function* onLogout() {
  yield put(unsetUser());
  yield Actions.reset('login');
}

function* logoutSaga() {
  yield takeLatest(LOGOUT, onLogout);
}

export default [loginSaga, logoutSaga];
