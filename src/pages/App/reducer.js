import { SET_SCREEN } from 'app/pages/App/actions';

type State = {
  screen: number,
};

const initialState: State = {
  screen: 0,
};

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case SET_SCREEN:
      return { ...state, screen: action.screen };
    default:
      return state;
  }
};
