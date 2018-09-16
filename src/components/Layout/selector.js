// @flow
import { createSelector } from 'reselect';

export const selectToastIsShow = createSelector((state) => state.layout, (layout) => layout.toastIsShow);
export const selectToastMessage = createSelector((state) => state.layout, (layout) => layout.toastMessage);
export const selectIsLoading = createSelector((state) => state.layout, (layout) => layout.isLoading);
