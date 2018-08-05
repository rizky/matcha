// @flow
import { createSelector } from 'reselect';

const selectAuth = (state) => state.auth;

export const selectCurrentUser = createSelector(selectAuth, (auth) => auth.user);
