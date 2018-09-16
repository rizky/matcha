/* eslint-disable no-magic-numbers */

import { takeEvery, put } from 'redux-saga/effects';
import { TOAST, showToast, hideToast } from 'src/components/Layout/actions';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* onToastWorker(action) {
  const { message } = action;
  yield put(showToast(message));
  yield delay(3000);
  yield put(hideToast());
}

function* onToastSaga() {
  yield takeEvery(TOAST, onToastWorker);
}

export default [onToastSaga];
