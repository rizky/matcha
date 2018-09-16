// @flow
import {
  SET_USER,
  UNSET_USER,
  type Action,
} from 'src/pages/Auth/actions';

type State = {
  user?: UserType,
};

const initialState: State = {
  user: undefined,
};

export default (state: State = initialState, action: Action): State => {
  if (action.type === SET_USER) {
    return { ...state, user: action.user };
  }
  if (action.type === UNSET_USER) {
    return { ...state, user: undefined };
  }
  return state;
};
