import {
  LOAD_THREADS,
  LOAD_MESSAGES,
  SELECT_THREAD,
} from 'app/pages/Messages/actions';
import type { Thread } from 'app/types/Thread';
import type { Message } from 'app/types/Message';

type State = {
  threads: Array<Thread>,
  selectedThread: string,
  messages: Array<Message>,
};

const initialState: State = {
  messages: [],
  selectedThread: '',
  threads: [],
};

export default (state: State = initialState, action: any): State => {
  if (action.type === LOAD_THREADS) {
    return { ...state, threads: action.threads };
  }
  if (action.type === LOAD_MESSAGES) {
    return { ...state, messages: action.messages };
  }
  if (action.type === SELECT_THREAD) {
    return { ...state, selectedThread: action.thread };
  }
  return state;
};
