import { put, select, call } from 'redux-saga/effects';
import { onSelectThreadWorker, onLoadMessagesWorker, onLoadThreadsWorker } from 'app/pages/Messages/sagas';
import {
  onLoadMessages,
  selectThread,
  loadMessages,
  loadThreads,
  onSelectThread,
} from 'app/pages/Messages/actions';
import { selectThread as selectThreadSelector } from 'app/pages/Messages/selector';
import { onLoadPhotosUser } from 'app/pages/Feed/actions';
import { selectCurrentUser } from 'app/pages/Auth/selector';

describe('messagesSaga', () => {
  it('onSelectThreadWorker', () => {
    const thread = '1';
    const gen = onSelectThreadWorker({ thread });
    expect(gen.next().value).toEqual(put(onLoadMessages(thread)));
    expect(gen.next().value).toEqual(put(selectThread(thread)));
    expect(gen.next().value).toEqual(select(selectThreadSelector));
    expect(gen.next({ user2: { id: '1' } }).value).toEqual(put(onLoadPhotosUser('1')));
  });
  it('onLoadMessagesWorker', () => {
    const thread = '1';
    const gen = onLoadMessagesWorker({ thread });
    expect(gen.next().value).toEqual(put(loadMessages([])));
    expect(gen.next().value).toEqual(call(fetch, `http://localhost:81/messages/thread/${thread}`));
    const response = { json: jest.fn };
    expect(gen.next(response).value).toEqual(call([response, response.json]));
    expect(gen.next(['test']).value).toEqual(put(loadMessages(['test'])));
  });
  it('onLoadThreadsWorker', () => {
    const gen = onLoadThreadsWorker();
    expect(gen.next().value).toEqual(select(selectCurrentUser));
    const currentUser = { id: '1' };
    expect(gen.next(currentUser).value).toEqual(call(fetch, `http://localhost:81/threads/${currentUser.id}`));
    const response = { json: jest.fn };
    expect(gen.next(response).value).toEqual(call([response, response.json]));
    const threads = [{ id: '1' }];
    expect(gen.next(threads).value).toEqual(put(loadThreads(threads)));
    expect(gen.next().value).toEqual(put(onSelectThread('1')));
  });
});
