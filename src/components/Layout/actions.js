// @flow
export const SHOW_TOAST: '@LAYOUT_REDUCER/SHOW_TOAST' = '@LAYOUT_REDUCER/SHOW_TOAST';
export const showToast = (message: string) => ({
  message,
  type: SHOW_TOAST,
});
export type ShowToastAction = { type: typeof SHOW_TOAST, message: string };

export const HIDE_TOAST: '@LAYOUT_REDUCER/HIDE_TOAST' = '@LAYOUT_REDUCER/HIDE_TOAST';
export const hideToast = () => ({
  type: HIDE_TOAST,
});
export type HideToastAction = { type: typeof HIDE_TOAST };

export const TOAST: '@LAYOUT_SAGA/TOAST' = '@LAYOUT_SAGA/TOAST';
export const toast = (message: string) => ({
  message,
  type: TOAST,
});
export type ToastAction = { type: typeof TOAST };

export const SHOW_LOADER: '@LAYOUT_REDUCER/SHOW_LOADER' = '@LAYOUT_REDUCER/SHOW_LOADER';
export const showLoader = () => ({
  type: SHOW_LOADER,
});
export type ShowLoaderAction = { type: typeof SHOW_LOADER };

export const HIDE_LOADER: '@LAYOUT_REDUCER/HIDE_LOADER' = '@LAYOUT_REDUCER/HIDE_LOADER';
export const hideLoader = () => ({
  type: HIDE_LOADER,
});
export type HideLoaderAction = { type: typeof HIDE_LOADER };

export type Action =
| ShowToastAction
| HideToastAction
| ToastAction
| ShowLoaderAction
| HideLoaderAction
