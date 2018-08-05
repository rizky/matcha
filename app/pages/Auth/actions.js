import type { UserType } from 'app/types/User';

export const SET_USER = '@AUTH_REDUCER/SET_USER';
export const UNSET_USER = '@AUTH_REDUCER/UNSET_USER';
export const LOGIN = '@AUTH_SAGA/LOGIN';
export const LOGOUT = '@AUTH_SAGA/LOGOUT';
export const RESET_PASSWORD = '@AUTH_SAGA/RESET_PASSWORD';

export const setUser = (user: UserType) => ({
  type: SET_USER,
  user,
});

export const unsetUser = () => ({
  type: UNSET_USER,
});

export const login = (email: string, password: string) => ({
  email,
  password,
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const resetPassword = (email: string) => ({
  email,
  type: RESET_PASSWORD,
});
