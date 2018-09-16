// @flow
import type { User } from 'src/types/User';

export const LOAD_USERS: '@DISCOVER_REDUCER/LOAD_USERS' = '@DISCOVER_REDUCER/LOAD_USERS';
export const loadUsers = (users: Array<User>) => ({
  type: LOAD_USERS,
  users,
});
export type LoadUsersAction = { type: typeof LOAD_USERS, users: Array<User> };

export const ON_LOAD_USERS: '@DISCOVER_SAGA/ON_LOAD_USERS' = '@DISCOVER_SAGA/ON_LOAD_USERS';
export const onLoadUsers = () => ({
  type: ON_LOAD_USERS,
});
export type OnLoadUsersAction = { type: typeof ON_LOAD_USERS };

export type Action =
| LoadUsersAction
| OnLoadUsersAction
