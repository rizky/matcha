import { fork, all } from 'redux-saga/effects';
import authSaga from 'src/pages/Auth/sagas';
import layoutSaga from 'src/components/Layout/sagas';

export default function* () {
  yield all([
    ...authSaga.map((saga) => fork(saga)),
    ...layoutSaga.map((saga) => fork(saga)),
  ]);
}
