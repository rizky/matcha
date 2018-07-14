import { fork, all } from 'redux-saga/effects';
import authSaga from 'app/pages/Auth/sagas';

export default function* () {
  yield all([
    ...authSaga.map((saga) => fork(saga)),
  ]);
}
