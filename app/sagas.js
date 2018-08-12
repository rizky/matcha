import { fork, all } from 'redux-saga/effects';
import authSaga from 'app/pages/Auth/sagas';
import feedSaga from 'app/pages/Feed/sagas';
import discoverSaga from 'app/pages/Discover/sagas';
import messagesSaga from 'app/pages/Messages/sagas';
import layoutSaga from 'app/components/Layout/sagas';

export default function* () {
  yield all([
    ...authSaga.map((saga) => fork(saga)),
    ...feedSaga.map((saga) => fork(saga)),
    ...discoverSaga.map((saga) => fork(saga)),
    ...messagesSaga.map((saga) => fork(saga)),
    ...layoutSaga.map((saga) => fork(saga)),
  ]);
}
