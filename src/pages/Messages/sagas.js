import { takeEvery, put, call, select } from 'redux-saga/effects';
import {
  loadThreads,
  ON_LOAD_THREADS,
  selectThread,
  onSelectThread,
  ON_SELECT_THREAD,
  loadMessages,
  onLoadMessages,
  ON_LOAD_MESSAGES,
} from 'app/pages/Messages/actions';
import { onLoadPhotosUser } from 'app/pages/Feed/actions';
import { selectThread as selectThreadSelector } from 'app/pages/Messages/selector';
import { selectCurrentUser } from 'app/pages/Auth/selector';

function* onLoadMessagesWorker(action) {
  const { thread } = action;
  try {
    yield put(loadMessages([]));
    const response = yield call(fetch, `http://localhost:81/messages/thread/${thread}`);
    const threads = yield call([response, response.json]);
    yield put(loadMessages(threads));
  } catch (e) {
    console.log(e);
  }
}

function* onSelectThreadWorker(action) {
  const { thread } = action;
  try {
    yield put(onLoadMessages(thread));
    yield put(selectThread(thread));
    const { user2: { id } } = yield select(selectThreadSelector);
    yield put(onLoadPhotosUser(id));
  } catch (e) {
    console.log(e);
  }
}

function* onLoadThreadsWorker() {
  const { id } = yield select(selectCurrentUser);
  try {
    const response = yield call(fetch, `http://localhost:81/threads/${id}`);
    const threads = yield call([response, response.json]);
    yield put(loadThreads(threads));
    yield put(onSelectThread(threads[0].id));
  } catch (e) {
    console.log(e);
  }
}

function* loadThreadsSaga() {
  yield takeEvery(ON_LOAD_THREADS, onLoadThreadsWorker);
}

function* loadMessagesSaga() {
  yield takeEvery(ON_LOAD_MESSAGES, onLoadMessagesWorker);
}

function* selectThreadSaga() {
  yield takeEvery(ON_SELECT_THREAD, onSelectThreadWorker);
}

export default [loadThreadsSaga, loadMessagesSaga, selectThreadSaga];
export { onSelectThreadWorker, onLoadMessagesWorker, onLoadThreadsWorker };
