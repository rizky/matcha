/*  eslint-disable no-magic-numbers */

import { onSelectThreadWorker, onLoadMessagesWorker, onLoadThreadsWorker } from 'app/pages/Messages/sagas';
import messagesStore from 'app/pages/Messages/reducer';
import authStore from 'app/pages/Auth/reducer';
import deepFreeze from 'deep-freeze';
import { loadMessages, loadThreads } from 'app/pages/Messages/actions';
import * as messageServices from 'app/services/messages.js';
import * as threadServices from 'app/services/threads.js';
import SagaTester from 'redux-saga-tester';

describe('messagesSaga', () => {
  const initialState = {
    messages: {
      messages: [],
      selectedThread: '',
      threads: [],
    },
  };
  it('onLoadMessagesWorker', () => {
    const threadId = '1';
    const messages = [{ id: '1' }];
    const sagaTester = new SagaTester({
      initialState: deepFreeze({ messages: initialState.messages }),
      reducers: { messages: messagesStore },
    });
    messageServices.get = jest.fn(() => messages);
    sagaTester.start(onLoadMessagesWorker, { thread: threadId });
    expect(sagaTester.numCalled(loadMessages().type)).toEqual(2);
    expect(sagaTester.getState()).toEqual({ messages: { ...initialState.messages, messages } });
  });
  it('onSelectThreadWorker', () => {
    const threadId = '1';
    const threads = [{ id: '1', user2: { id: '1' } }];
    const sagaTester = new SagaTester({
      initialState: deepFreeze({ messages: { ...initialState.messages, threads } }),
      reducers: { messages: messagesStore },
    });
    sagaTester.start(onSelectThreadWorker, { thread: threadId });
    expect(sagaTester.getState())
      .toEqual({ messages: { ...initialState.messages, selectedThread: threadId, threads } });
  });
  it('onLoadThreadsWorker', () => {
    const userId = '1';
    const threads = [{ id: '1', user2: { id: '1' } }];
    const sagaTester = new SagaTester({
      initialState: deepFreeze({ ...initialState, auth: { user: { id: userId } } }),
      reducers: {
        auth: authStore,
        messages: messagesStore,
      },
    });
    threadServices.get = jest.fn(() => threads);
    sagaTester.start(onLoadThreadsWorker);
    expect(sagaTester.numCalled(loadThreads().type)).toEqual(2);
    expect(sagaTester.getState())
      .toEqual({ auth: { user: { id: userId } }, messages: { ...initialState.messages, threads } });
  });
});
