// @flow
export const SET_USER: '@AUTH_REDUCER/SET_USER' = '@AUTH_REDUCER/SET_USER';
export const setUser = (user: UserType) => ({
  type: SET_USER,
  user,
});
export type SetUserAction = { type: typeof SET_USER, user: UserType };

export const UNSET_USER: '@AUTH_REDUCER/UNSET_USER' = '@AUTH_REDUCER/UNSET_USER';
export const unsetUser = () => ({
  type: UNSET_USER,
});
export type UnsetUserAction = { type: typeof UNSET_USER };

export const LOGIN: '@AUTH_SAGA/LOGIN' = '@AUTH_SAGA/LOGIN';
export const login = (code: string) => ({
  code,
  type: LOGIN,
});
export type LoginAction = { type: typeof LOGIN, code: string };

export const LOGOUT: '@AUTH_SAGA/LOGOUT' = '@AUTH_SAGA/LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});
export type LogoutAction = { type: typeof LOGOUT};

export type Action =
| SetUserAction
| UnsetUserAction
| LoginAction
| LogoutAction
