import { takeEvery, call, put } from 'redux-saga/effects';
import { ActionWithPayload } from '../Action';
import {
    ActionTypeKeys,
    navigationActionCreators,
} from '../reducers/navigationReducer';
import { navigate, back } from '../../navigator';

export function* navigateSaga({
    payload: { name, params },
}: ActionWithPayload) {
    try {
        yield call(navigate, name, params);
    } catch (err) {
        yield put(navigationActionCreators.navigateFailed());
    }
}

export function* backSaga() {
    try {
        yield call(back);
    } catch (err) {
        yield put(navigationActionCreators.backFailed());
    }
}

export function* navigationSaga() {
    yield* [
        takeEvery(ActionTypeKeys.NAVIGATE, navigateSaga),
        takeEvery(ActionTypeKeys.BACK, backSaga),
    ];
}
