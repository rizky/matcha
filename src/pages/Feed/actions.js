// @flow
export const LOAD_PHOTOS: '@FEED_REDUCER/LOAD_PHOTOS' = '@FEED_REDUCER/LOAD_PHOTOS';
export const loadPhotos = (photos: Array<PhotoType>) => ({
  photos,
  type: LOAD_PHOTOS,
});
export type LoadPhotosAction = { type: typeof LOAD_PHOTOS, photos: Array<PhotoType> };

export const ON_LOAD_PHOTOS: '@FEED_SAGA/ON_LOAD_PHOTOS' = '@FEED_SAGA/ON_LOAD_PHOTOS';
export const onLoadPhotos = () => ({
  type: ON_LOAD_PHOTOS,
});
export type OnLoadPhotosAction = { type: typeof ON_LOAD_PHOTOS };

export const LOAD_PHOTOS_USER: '@FEED_REDUCER/LOAD_PHOTOS_USER' = '@FEED_REDUCER/LOAD_PHOTOS_USER';
export const loadPhotosUser = (photos: Array<PhotoType>) => ({
  photos,
  type: LOAD_PHOTOS_USER,
});
export type LoadPhotosUserAction = { type: typeof LOAD_PHOTOS_USER, photos: Array<PhotoType> };

export const ON_LOAD_PHOTOS_USER: '@FEED_SAGA/ON_LOAD_PHOTOS_USER' = '@FEED_SAGA/ON_LOAD_PHOTOS_USER';
export const onLoadPhotosUser = (userId: string) => ({
  type: ON_LOAD_PHOTOS_USER,
  userId,
});
export type OnLoadPhotosUserAction = { type: typeof ON_LOAD_PHOTOS_USER, userId: string };

export type Action =
| LoadPhotosAction
| OnLoadPhotosAction
| LoadPhotosUserAction
| OnLoadPhotosUserAction
