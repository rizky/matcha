import type { UserType } from 'src/types/User';

export const LOGIN = '@AUTH_SAGA/LOGIN';
export const LOGOUT = '@AUTH_SAGA/LOGOUT';
export const RESET_PASSWORD = '@AUTH_SAGA/RESET_PASSWORD';
export const CHANGE_PASSWORD = '@AUTH_SAGA/CHANGE_PASSWORD';
export const SET_USER = '@AUTH_REDUCER/SET_USER';
export const SIGNUP = '@AUTH_SAGA/SIGNUP';
export const UNSET_USER = '@AUTH_REDUCER/UNSET_USER';
export const CONFIRMATION = '@AUTH_SAGA/CONFIRMATION';

export const setUser = (user: UserType) => ({
  type: SET_USER,
  user,
});

export const unsetUser = () => ({
  type: UNSET_USER,
});

export const login = (username: string, password: string) => ({
  password,
  type: LOGIN,
  username,
});

export const logout = () => ({
  type: LOGOUT,
});

export const resetPassword = (email: string) => ({
  email,
  type: RESET_PASSWORD,
});

export const changePassword = (token: string, password: string, password2: string) => ({
  password,
  password2,
  token,
  type: CHANGE_PASSWORD,
});

export const signUp = (user : UserType) => ({
  type: SIGNUP,
  user,
});

export const confirmation = (email: string, token: string) => ({
  email,
  token,
  type: CONFIRMATION,
});
