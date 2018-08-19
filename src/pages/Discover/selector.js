import { createSelector } from 'reselect';

export const selectUsers = createSelector((state) => state.discover, (discover) => discover.users);
