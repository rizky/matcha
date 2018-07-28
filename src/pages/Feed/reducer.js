import { LOAD_PHOTOS, LOAD_PHOTOS_USER } from 'app/pages/Feed/actions';
import type { Photo } from 'app/types/Photo';

type State = {
  photos: Array<Photo>,
  photosUser: Array<Photo>,
};

const initialState: State = {
  photos: [],
  photosUser: [],
};

export default (state: State = initialState, action: any): State => {
  if (action.type === LOAD_PHOTOS) {
    return { ...state, photos: action.photos };
  }
  if (action.type === LOAD_PHOTOS_USER) {
    return { ...state, photosUser: action.photos };
  }
  return state;
};
