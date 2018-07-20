import { createSelector } from 'reselect';

export const selectPhotos = createSelector((state) => state.photos, (photos) => photos.photos);
