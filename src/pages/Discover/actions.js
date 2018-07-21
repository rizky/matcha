import type { User } from 'app/types/User';

export const LOAD_USERS = '@DISCOVER_REDUCER/LOAD_USERS';
export const ON_LOAD_USERS = '@DISCOVER_SAGA/ON_LOAD_USERS';

export const loadUsers = (users: Array<User>) => ({
  type: LOAD_USERS,
  users,
});

export const onLoadUsers = () => ({
  type: ON_LOAD_USERS,
});
