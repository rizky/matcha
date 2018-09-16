// @flow
import { put, takeLatest, call } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import {
  CHANGE_PASSWORD,
  CONFIRMATION,
  LOGIN,
  LOGOUT,
  RESET_PASSWORD,
  setUser,
  SIGNUP,
  unsetUser,
  type LoginAction,
  type ResetPasswordAction,
  type ChangePasswordAction,
  type SignUpAction,
  type ConfirmationAction,
} from 'src/pages/Auth/actions';
import * as userServices from 'src/services/users';
import { toast, showLoader, hideLoader } from 'src/components/Layout/actions';

function* logInWorker(action: LoginAction): Generator<any, void, any> {
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

function* logInSaga(): Generator<any, void, any> {
  yield takeLatest(LOGIN, logInWorker);
}

function* logOutWorker() {
  yield put(unsetUser());
  yield Actions.reset('login');
}

function* logOutSaga(): Generator<any, void, any> {
  yield takeLatest(LOGOUT, logOutWorker);
}

function* signUpWorker(action: SignUpAction): Generator<any, void, any> {
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

function* signUpSaga(): Generator<any, void, any> {
  yield takeLatest(SIGNUP, signUpWorker);
}

function* confirmationWorker(action: ConfirmationAction): Generator<any, void, any> {
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

function* confirmationSaga(): Generator<any, void, any> {
  yield takeLatest(CONFIRMATION, confirmationWorker);
}

function* resetPasswordWorker(action: ResetPasswordAction): Generator<any, void, any> {
  const { email } = action;
  try {
    yield put(showLoader());
    yield call(userServices.resetPassword, email);
    yield put(hideLoader());
    yield Actions.reset('changePassword');
  } catch (err) {
    yield put(hideLoader());
    yield put(toast(err.message));
  }
}

function* resetPasswordSaga(): Generator<any, void, any> {
  yield takeLatest(RESET_PASSWORD, resetPasswordWorker);
}

function* changePasswordWorker(action: ChangePasswordAction): Generator<any, void, any> {
  const { token, password, password2 } = action;
  try {
    yield put(showLoader());
    yield call(userServices.changePassword, token, password, password2);
    yield put(hideLoader());
    yield Actions.reset('login');
  } catch (err) {
    yield put(hideLoader());
    yield put(toast(err.message));
  }
}

function* changePasswordSaga(): Generator<any, void, any> {
  yield takeLatest(CHANGE_PASSWORD, changePasswordWorker);
}

export default [logInSaga, logOutSaga, signUpSaga, confirmationSaga, resetPasswordSaga, changePasswordSaga];
export { signUpWorker, logInWorker, confirmationWorker, resetPasswordWorker, changePasswordWorker };
