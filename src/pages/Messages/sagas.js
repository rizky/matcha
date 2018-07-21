import { takeEvery, put, call } from 'redux-saga/effects';
import { loadThreads, ON_LOAD_THREADS } from 'app/pages/Messages/actions';

function* onLoadThreads() {
  try {
    const response = yield call(fetch, 'http://localhost:81/threads/1');
    const threads = yield call([response, response.json]);
    yield put(loadThreads(threads));
  } catch (e) {
    console.log(e);
  }
}

function* loadThreadsSaga() {
  yield takeEvery(ON_LOAD_THREADS, onLoadThreads);
}

export default [loadThreadsSaga];
