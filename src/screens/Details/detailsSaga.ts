import { takeEvery, put, call, select } from 'redux-saga/effects';
import { ActionTypeKeys, actionCreators } from './detailsReducer';
import { appActionCreators } from '../../store/reducers/appReducer';
import { ActionWithPayload } from '../../store/Action';
import { services } from '../../api/services';

export function* getImageDetailsRequest({ payload }: ActionWithPayload) {
    try {
        yield put(appActionCreators.loadingStart());
        const { data } = yield call(services.imageDetails, payload);
        yield put(actionCreators.getImageDetailsSuccess(data));
        yield put(appActionCreators.loadingStop());
    } catch (e) {
        yield put(appActionCreators.catchApiSecureError(e));
    }
}

export function* detailsSaga() {
    yield takeEvery(
        ActionTypeKeys.GET_IMAGE_DETAILS_REQUEST,
        getImageDetailsRequest,
    );
}
