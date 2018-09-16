// @flow
import { LOAD_USERS, type Action } from 'src/pages/Discover/actions';
import type { User } from 'src/types/User';

type State = {
  users: Array<User>,
};

const initialState: State = {
  users: [],
};

export default (state: State = initialState, action: Action): State => {
  if (action.type === LOAD_USERS) {
    return { ...state, users: action.users };
  }
  return state;
};
