import { LOAD_THREADS } from 'app/pages/Messages/actions';
import type { Thread } from 'app/types/Thread';

type State = {
  threads: Array<Thread>,
};

const initialState: State = {
  threads: [],
};

export default (state: State = initialState, action: any): State => {
  if (action.type === LOAD_THREADS) {
    return { ...state, threads: action.threads };
  }
  return state;
};
