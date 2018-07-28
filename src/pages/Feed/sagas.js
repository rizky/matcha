import { takeEvery, put, call } from 'redux-saga/effects';
import { loadPhotos, ON_LOAD_PHOTOS, loadPhotosUser, ON_LOAD_PHOTOS_USER } from 'app/pages/Feed/actions';

function* onLoadPhotos() {
  try {
    const response = yield call(fetch, 'http://localhost:81/photos');
    const photos = yield call([response, response.json]);
    yield put(loadPhotos(photos));
  } catch (e) {
    console.log(e);
  }
}

function* loadPhotosSaga() {
  yield takeEvery(ON_LOAD_PHOTOS, onLoadPhotos);
}

function* onLoadPhotosUser(action) {
  try {
    const { userId } = action;
    const response = yield call(fetch, `http://localhost:81/photos/${userId}`);
    const photos = yield call([response, response.json]);
    yield put(loadPhotosUser(photos));
  } catch (e) {
    console.log(e);
  }
}

function* loadPhotosUserSaga() {
  yield takeEvery(ON_LOAD_PHOTOS_USER, onLoadPhotosUser);
}

export default [loadPhotosSaga, loadPhotosUserSaga];
