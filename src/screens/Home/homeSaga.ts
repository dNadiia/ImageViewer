import { takeEvery, put, call, select } from 'redux-saga/effects';
import { RootState } from '../../store/reducers';
import { ActionTypeKeys, actionCreators } from './homeReducer';
import { appActionCreators } from '../../store/reducers/appReducer';
import { services } from '../../api/services';

export function* getImagesRequest() {
    try {
        const { pageCount, page } = yield select(
            (state: RootState) => state.home,
        );
        if (page <= pageCount) {
            yield put(appActionCreators.loadingStart());
            const { data } = yield call(services.image, page);
            yield put(actionCreators.getImagesSuccess(data));
            yield put(appActionCreators.loadingStop());
        }
    } catch (e) {
        yield put(appActionCreators.catchApiSecureError(e));
    }
}

export function* refreshImagesRequest() {
    try {
        const { data } = yield call(services.image, 1);
        yield put(actionCreators.refreshImagesSuccess(data));
    } catch (e) {
        yield put(actionCreators.refreshImagesFailed());
        yield put(appActionCreators.catchApiSecureError(e));
    }
}

export function* homeSaga() {
    yield* [
        takeEvery(ActionTypeKeys.GET_IMAGES_REQUEST, getImagesRequest),
        takeEvery(ActionTypeKeys.REFRESH_IMAGES_REQUEST, refreshImagesRequest),
    ];
}
