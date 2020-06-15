import { all, call } from 'redux-saga/effects';
import { appSaga } from './appSaga';
import { navigationSaga } from './navigationSaga';
import { homeSaga } from '../../screens/Home/homeSaga';
import { detailsSaga } from '../../screens/Details/detailsSaga';

export function* sagas() {
    yield all([
        call(appSaga),
        call(navigationSaga),
        call(homeSaga),
        call(detailsSaga),
    ]);
}
