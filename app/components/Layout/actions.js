export const SHOW_TOAST = '@LAYOUT_REDUCER/SHOW_TOAST';
export const HIDE_TOAST = '@LAYOUT_REDUCER/HIDE_TOAST';
export const TOAST = '@LAYOUT_SAGA/TOAST';

export const showToast = (message: string) => ({
  message,
  type: SHOW_TOAST,
});

export const hideToast = () => ({
  type: HIDE_TOAST,
});

export const toast = (message: string) => ({
  message,
  type: TOAST,
});
