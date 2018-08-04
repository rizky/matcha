import { onSelectThreadWorker, onLoadMessagesWorker, onLoadThreadsWorker } from 'app/pages/Messages/sagas';
import { expectSaga } from 'redux-saga-test-plan';
import messagesStore from 'app/pages/Messages/reducer';
import deepFreeze from 'deep-freeze';
import { select, call } from 'redux-saga/effects';
import { selectThread as selectThreadSelector } from 'app/pages/Messages/selector';
import { onLoadPhotosUser } from 'app/pages/Feed/actions';
import { loadMessages, loadThreads } from 'app/pages/Messages/actions';
import { selectCurrentUser } from 'app/pages/Auth/selector';
import * as messageServices from 'app/services/messages.js';
import * as threadServices from 'app/services/threads.js';

describe('messagesSaga', () => {
  const initialState = {
    messages: [],
    selectedThread: '',
    threads: [],
  };
  it('onLoadMessagesWorker', () => {
    const threadId = '1';
    const messages = [{ id: '1' }];
    return expectSaga(onLoadMessagesWorker, { thread: threadId })
      .withReducer(messagesStore, deepFreeze(initialState))
      .provide([
        [call(messageServices.get, threadId), messages],
      ])
      .put(loadMessages(messages))
      .hasFinalState({ ...initialState, messages })
      .run();
  });
  it('onSelectThreadWorker', () => {
    const threadId = '1';
    const userId = '1';
    const threads = [{ id: '1', user2: { id: '1' } }];
    return expectSaga(onSelectThreadWorker, { thread: threadId })
      .withReducer(messagesStore, deepFreeze({ ...initialState, threads }))
      .provide([
        [select(selectThreadSelector), { user2: { id: userId } }],
      ])
      .put(onLoadPhotosUser(userId))
      .hasFinalState({ ...initialState, selectedThread: threadId, threads })
      .run();
  });
  it('onLoadThreadsWorker', () => {
    const userId = '1';
    const threads = [{ id: '1', user2: { id: '1' } }];
    return expectSaga(onLoadThreadsWorker)
      .withReducer(messagesStore, deepFreeze(initialState))
      .provide([
        [select(selectCurrentUser), { id: userId }],
        [call(threadServices.get, userId), threads],
      ])
      .put(loadThreads(threads))
      .hasFinalState({ ...initialState, threads })
      .run();
  });
});
