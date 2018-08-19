import { fork, all } from 'redux-saga/effects';
import authSaga from 'src/pages/Auth/sagas';
import feedSaga from 'src/pages/Feed/sagas';
import discoverSaga from 'src/pages/Discover/sagas';
import messagesSaga from 'src/pages/Messages/sagas';
import layoutSaga from 'src/components/Layout/sagas';

export default function* () {
  yield all([
    ...authSaga.map((saga) => fork(saga)),
    ...feedSaga.map((saga) => fork(saga)),
    ...discoverSaga.map((saga) => fork(saga)),
    ...messagesSaga.map((saga) => fork(saga)),
    ...layoutSaga.map((saga) => fork(saga)),
  ]);
}
