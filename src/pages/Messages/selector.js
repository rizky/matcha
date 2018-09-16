// @flow
import { createSelector } from 'reselect';

export const selectThreads = createSelector((state) =>
  state.messages, (messages) => messages.threads);

export const selectMessages = createSelector((state) =>
  state.messages, (messages) => messages.messages);

export const selectThread = createSelector((state) =>
  state.messages, (messages) =>
  messages.threads.find((thread) => thread.id === messages.selectedThread));
