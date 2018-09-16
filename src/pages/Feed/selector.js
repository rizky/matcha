// @flow
import { createSelector } from 'reselect';

export const selectPhotos = createSelector((state) => state.feed, (feed) => feed.photos);
export const selectPhotosUser = createSelector((state) => state.feed, (feed) => feed.photosUser);
