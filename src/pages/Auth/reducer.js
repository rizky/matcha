import set from 'lodash/set';
import {
  CLEAR_USER_ID,
  UPDATE_LOGIN_FORM,
  SET_USER_ID,
} from 'app/pages/Auth/actions';

type State = {
  loginForm?: {
    username: ?string,
    password: ?string,
  },
  userId: ?string,
};

const initialState: State = {
  loginForm: {
    password: undefined,
    username: undefined,
  },
  userId: undefined,
};

const setIn = (state: State, path: Array<any>, value: string): State => {
  const mutatedState: State = set(state, path, value);
  return { ...mutatedState };
};

export default (state: State = initialState, action: any): State => {
  if (action.type === SET_USER_ID) {
    return { ...state, userId: action.userId };
  }
  if (action.type === CLEAR_USER_ID) {
    return { ...state, userId: undefined };
  }
  if (action.type === UPDATE_LOGIN_FORM) {
    return setIn(state, action.path, action.value);
  }
  return state;
};
