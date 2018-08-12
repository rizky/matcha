import { SHOW_TOAST, HIDE_TOAST } from 'app/components/Layout/actions';

type State = {
  toastIsShow: boolean,
  message: string,
};

const initialState: State = {
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
  return state;
};
