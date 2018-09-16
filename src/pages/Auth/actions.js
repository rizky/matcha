// @flow
import type { UserType } from 'src/types/User';

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
export const login = (username: string, password: string) => ({
  password,
  type: LOGIN,
  username,
});
export type LoginAction = { type: typeof LOGIN, username: string, password: string };

export const LOGOUT: '@AUTH_SAGA/LOGOUT' = '@AUTH_SAGA/LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});
export type LogoutAction = { type: typeof LOGOUT};

export const RESET_PASSWORD: '@AUTH_SAGA/RESET_PASSWORD' = '@AUTH_SAGA/RESET_PASSWORD';
export const resetPassword = (email: string) => ({
  email,
  type: RESET_PASSWORD,
});
export type ResetPasswordAction = { type: typeof RESET_PASSWORD, email: string };

export const CHANGE_PASSWORD: '@AUTH_SAGA/CHANGE_PASSWORD' = '@AUTH_SAGA/CHANGE_PASSWORD';
export const changePassword = (token: string, password: string, password2: string) => ({
  password,
  password2,
  token,
  type: CHANGE_PASSWORD,
});
export type ChangePasswordAction = { type: typeof CHANGE_PASSWORD, token: string, password: string, password2: string };

export const SIGNUP: '@AUTH_SAGA/SIGNUP' = '@AUTH_SAGA/SIGNUP';
export const signUp = (user : UserType) => ({
  type: SIGNUP,
  user,
});
export type SignUpAction = { type: typeof SIGNUP, user : UserType };

export const CONFIRMATION: '@AUTH_SAGA/CONFIRMATION' = '@AUTH_SAGA/CONFIRMATION';
export const confirmation = (email: string, token: string) => ({
  email,
  token,
  type: CONFIRMATION,
});
export type ConfirmationAction = { type: typeof CONFIRMATION, email: string, token: string };

export type Action =
| SetUserAction
| UnsetUserAction
| LoginAction
| LogoutAction
| ResetPasswordAction
| ChangePasswordAction
| SignUpAction
| ConfirmationAction
