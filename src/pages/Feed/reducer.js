import { LOAD_PHOTOS } from 'app/pages/Feed/actions';
import type { Photo } from 'app/types/Photo';

type State = {
  photos: Array<Photo>,
};

const initialState: State = {
  photos: [],
};

export default (state: State = initialState, action: any): State => {
  if (action.type === LOAD_PHOTOS) {
    return { ...state, photos: action.photos };
  }
  return state;
};
