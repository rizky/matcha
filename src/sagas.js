import { fork, all } from 'redux-saga/effects';
import authSaga from 'app/pages/Auth/sagas';
import photosSaga from 'app/components/Photos/sagas';

export default function* () {
  yield all([
    ...authSaga.map((saga) => fork(saga)),
    ...photosSaga.map((saga) => fork(saga)),
  ]);
}
