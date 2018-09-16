// @flow
import type { ThreadType } from 'src/types/Thread';
import type { MessageType } from 'src/types/Message';

export const LOAD_THREADS: '@MESSAGES_REDUCER/LOAD_THREADS' = '@MESSAGES_REDUCER/LOAD_THREADS';
export const loadThreads = (threads: Array<ThreadType>) => ({
  threads,
  type: LOAD_THREADS,
});
export type LoadThreadsAction = { type: typeof LOAD_THREADS, threads: Array<ThreadType> };

export const ON_LOAD_THREADS: '@MESSAGES_SAGA/ON_LOAD_THREADS' = '@MESSAGES_SAGA/ON_LOAD_THREADS';
export const onLoadThreads = () => ({
  type: ON_LOAD_THREADS,
});
export type OnLoadThreadsAction = { type: typeof ON_LOAD_THREADS };

export const SELECT_THREAD: '@MESSAGES_REDUCER/SELECT_THREAD' = '@MESSAGES_REDUCER/SELECT_THREAD';
export const selectThread = (thread: string) => ({
  thread,
  type: SELECT_THREAD,
});
export type SelectThreadAction = { type: typeof SELECT_THREAD, thread: string };

export const ON_SELECT_THREAD: '@MESSAGES_REDUCER/ON_SELECT_THREAD' = '@MESSAGES_REDUCER/ON_SELECT_THREAD';
export const onSelectThread = (thread: string) => ({
  thread,
  type: ON_SELECT_THREAD,
});
export type OnSelectThreadAction = { type: typeof ON_SELECT_THREAD, thread: string };

export const LOAD_MESSAGES: '@MESSAGES_REDUCER/LOAD_MESSAGES' = '@MESSAGES_REDUCER/LOAD_MESSAGES';
export const loadMessages = (messages: Array<MessageType>) => ({
  messages,
  type: LOAD_MESSAGES,
});
export type LoadMessagesAction = { type: typeof LOAD_MESSAGES, messages: Array<MessageType> };

export const ON_LOAD_MESSAGES: '@MESSAGES_SAGA/ON_LOAD_MESSAGES' = '@MESSAGES_SAGA/ON_LOAD_MESSAGES';
export const onLoadMessages = (thread: string) => ({
  thread,
  type: ON_LOAD_MESSAGES,
});
export type OnLoadMessagesAction = { type: typeof ON_LOAD_MESSAGES, thread: string };

export type Action =
| LoadThreadsAction
| OnLoadThreadsAction
| SelectThreadAction
| OnSelectThreadAction
| LoadMessagesAction
| OnLoadMessagesAction

