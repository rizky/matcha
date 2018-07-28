import type { Photo } from 'app/types/Photo';

export const LOAD_PHOTOS = '@FEED_REDUCER/LOAD_PHOTOS';
export const ON_LOAD_PHOTOS = '@FEED_SAGA/ON_LOAD_PHOTOS';
export const LOAD_PHOTOS_USER = '@FEED_REDUCER/LOAD_PHOTOS_USER';
export const ON_LOAD_PHOTOS_USER = '@FEED_SAGA/ON_LOAD_PHOTOS_USER';

export const loadPhotos = (photos: Array<Photo>) => ({
  photos,
  type: LOAD_PHOTOS,
});

export const onLoadPhotos = () => ({
  type: ON_LOAD_PHOTOS,
});

export const loadPhotosUser = (photos: Array<Photo>) => ({
  photos,
  type: LOAD_PHOTOS_USER,
});

export const onLoadPhotosUser = (userId: string) => ({
  type: ON_LOAD_PHOTOS_USER,
  userId,
});
