import { createSelector } from 'reselect';

export const selectThreads = createSelector((state) => state.messages, (messages) => messages.threads);
