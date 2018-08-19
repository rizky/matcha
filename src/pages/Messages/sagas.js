import { takeEvery, put, call, select } from 'redux-saga/effects';
import {
  loadThreads,
  ON_LOAD_THREADS,
  selectThread,
  ON_SELECT_THREAD,
  loadMessages,
  onLoadMessages,
  ON_LOAD_MESSAGES,
} from 'src/pages/Messages/actions';
import { onLoadPhotosUser, loadPhotosUser } from 'src/pages/Feed/actions';
import { selectThread as selectThreadSelector } from 'src/pages/Messages/selector';
import { selectCurrentUser } from 'src/pages/Auth/selector';
import * as messageServices from 'src/services/messages.js';
import * as threadServices from 'src/services/threads.js';

function* onLoadMessagesWorker(action) {
  const { thread } = action;
  try {
    yield put(loadMessages([]));
    const messages = yield call(messageServices.get, thread);
    yield put(loadMessages(messages));
  } catch (e) {
    console.log(e);
  }
}

function* onSelectThreadWorker(action) {
  const { thread } = action;
  try {
    yield put(selectThread(thread));
    yield put(onLoadMessages(thread));
    const { user2: { id } } = yield select(selectThreadSelector);
    yield put(onLoadPhotosUser(id));
  } catch (e) {
    console.log(e);
  }
}

function* onLoadThreadsWorker() {
  const { id } = yield select(selectCurrentUser);
  try {
    yield put(loadMessages([]));
    yield put(loadThreads([]));
    yield put(loadPhotosUser([]));
    const threads = yield call(threadServices.get, id);
    yield put(loadThreads(threads));
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
