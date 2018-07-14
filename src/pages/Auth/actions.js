export const SET_USER_ID = '@AUTH_REDUCER/SET_USER_ID';
export const LOGIN = '@AUTH_SAGA/LOGIN';
export const LOGOUT = '@AUTH_SAGA/LOGOUT';
export const CLEAR_USER_ID = '@AUTH_REDUCER/CLEAR_USER_ID';
export const UPDATE_LOGIN_FORM = '@AUTH_REDUCER/UPDATE_LOGIN_FORM';
export const ON_RESET_PASSWORD = '@AUTH_SAGA/ON_RESET_PASSWORD';

export const setUserId = (userId: string) => ({
  type: SET_USER_ID,
  userId,
});

export const login = (userId: string) => ({
  type: LOGIN,
  userId,
});

export const logout = () => ({
  type: LOGOUT,
});

export const clearUserId = () => ({
  type: CLEAR_USER_ID,
});

export const updateLoginForm = (path: string, value: string) => ({
  path,
  type: UPDATE_LOGIN_FORM,
  value,
});

export const resetPassword = (email: string) => ({
  email,
  type: ON_RESET_PASSWORD,
});

