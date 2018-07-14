// @flow
import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectLoginForm = createSelector(selectUser, (user) => user.loginForm);

export const selectUserId = createSelector(selectUser, (user) => user.userId);
