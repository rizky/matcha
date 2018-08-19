export const SHOW_TOAST = '@LAYOUT_REDUCER/SHOW_TOAST';
export const HIDE_TOAST = '@LAYOUT_REDUCER/HIDE_TOAST';
export const TOAST = '@LAYOUT_SAGA/TOAST';
export const SHOW_LOADER = '@LAYOUT_REDUCER/SHOW_LOADER';
export const HIDE_LOADER = '@LAYOUT_REDUCER/HIDE_LOADER';

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

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});
