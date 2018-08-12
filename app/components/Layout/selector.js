import { createSelector } from 'reselect';

export const selectToastIsShow = createSelector((state) => state.layout, (layout) => layout.toastIsShow);
export const selectToastMessage = createSelector((state) => state.layout, (layout) => layout.toastMessage);
