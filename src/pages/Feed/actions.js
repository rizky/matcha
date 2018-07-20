import type { Photo } from 'app/types/Photo';

export const LOAD_PHOTOS = '@FEED_REDUCER/LOAD_PHOTOS';
export const ON_LOAD_PHOTOS = '@FEED_SAGA/ON_LOAD_PHOTOS';

export const loadPhotos = (photos: Array<Photo>) => ({
  photos,
  type: LOAD_PHOTOS,
});

export const onLoadPhotos = () => ({
  type: ON_LOAD_PHOTOS,
});
