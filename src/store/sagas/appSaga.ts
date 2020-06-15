import { takeEvery, put, call } from 'redux-saga/effects';
import { appActionCreators, ActionTypeKeys } from '../reducers/appReducer';
import { getErrorMessage, parseError } from '../../api/errors';
import { localize } from '../../common/localizations';
import { ActionWithPayload } from '../Action';
import { initialize as initializeToken, saveToken } from '../../api/token';
import { services } from '../../api/services';

export function* appStartSaga() {
    try {
        yield call(initializeToken);
        const { data } = yield call(services.auth);
        yield call(saveToken, data.token);
        yield put(appActionCreators.appAuthorize());
        yield put(appActionCreators.splashHide());
    } catch (e) {
        yield put(appActionCreators.splashHide());
    }
}

export function* catchApiErrorSaga({ payload }: ActionWithPayload) {
    try {
        const error = parseError(payload);
        const errorMessage = getErrorMessage(error.identifier);
        yield put(appActionCreators.showErrorMessage(errorMessage));
    } catch (e) {
        yield put(
            appActionCreators.showErrorMessage(
                localize('api_error.something_went_wrong'),
            ),
        );
    }
}

export function* catchApiSecureErrorSaga({ payload }: ActionWithPayload) {
    if (payload) {
        yield put(appActionCreators.catchApiError(payload));
    } else {
        yield put(
            appActionCreators.showErrorMessage(
                localize('api_error.authorization_expired'),
            ),
        );
        yield put(appActionCreators.appUnAuthorize());
    }
}

export function* appSaga() {
    yield* [
        takeEvery(ActionTypeKeys.APP_START, appStartSaga),
        takeEvery(ActionTypeKeys.CATCH_API_ERROR, catchApiErrorSaga),
        takeEvery(
            ActionTypeKeys.CATCH_API_SECURE_ERROR,
            catchApiSecureErrorSaga,
        ),
    ];
}
