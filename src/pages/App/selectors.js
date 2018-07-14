import { createSelector } from 'reselect';

const selectConstants = (state) => state.constants;

export const selectScreen = createSelector(selectConstants, (constants) => constants.screen);
