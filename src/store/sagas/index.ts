import { all, call } from 'redux-saga/effects';
import { appSaga } from './appSaga';
import { navigationSaga } from './navigationSaga';

export function* sagas() {
    yield all([call(appSaga), call(navigationSaga)]);
}
