import {
  HIDE_LOADER,
  HIDE_TOAST,
  SHOW_LOADER,
  SHOW_TOAST,
} from 'src/components/Layout/actions';

type State = {
  isLoading: boolean,
  message: string,
  toastIsShow: boolean,
};

const initialState: State = {
  isLoading: false,
  toastIsShow: false,
  toastMessage: '',
};

export default (state: State = initialState, action: any): State => {
  if (action.type === SHOW_TOAST) {
    return { ...state, toastIsShow: true, toastMessage: action.message };
  }
  if (action.type === HIDE_TOAST) {
    return { ...state, toastIsShow: false, toastMessage: '' };
  }
  if (action.type === SHOW_LOADER) {
    return { ...state, isLoading: true };
  }
  if (action.type === HIDE_LOADER) {
    return { ...state, isLoading: false };
  }
  return state;
};
