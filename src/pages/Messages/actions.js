import type { Thread } from 'app/types/Thread';

export const LOAD_THREADS = '@MESSAGES_REDUCER/LOAD_THREADS';
export const ON_LOAD_THREADS = '@MESSAGES_SAGA/ON_LOAD_THREADS';

export const loadThreads = (threads: Array<Thread>) => ({
  threads,
  type: LOAD_THREADS,
});

export const onLoadThreads = () => ({
  type: ON_LOAD_THREADS,
});
