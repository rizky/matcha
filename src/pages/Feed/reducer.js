// @flow
import { LOAD_PHOTOS, LOAD_PHOTOS_USER, type Action } from 'src/pages/Feed/actions';
import type { Photo } from 'src/types/Photo';

type State = {
  photos: Array<Photo>,
  photosUser: Array<Photo>,
};

const initialState: State = {
  photos: [],
  photosUser: [],
};

export default (state: State = initialState, action: Action): State => {
  if (action.type === LOAD_PHOTOS) {
    return { ...state, photos: action.photos };
  }
  if (action.type === LOAD_PHOTOS_USER) {
    return { ...state, photosUser: action.photos };
  }
  return state;
};
