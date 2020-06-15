import { AnyAction, Reducer } from 'redux';
import { createAction } from '../Action';

// Actions
export enum ActionTypeKeys {
    APP_START = 'APP_START',
    APP_STOP = 'APP_STOP',
    APP_AUTHORIZED = 'APP_AUTHORIZED',
    APP_UNAUTHORIZED = 'APP_UNAUTHORIZED',

    SPLASH_HIDE = 'SPLASH_HIDE',

    LOADING_START = 'LOADING_START',
    LOADING_STOP = 'LOADING_STOP',
    CATCH_API_ERROR = 'CATCH_API_ERROR',
    CATCH_API_SECURE_ERROR = 'CATCH_API_SECURE_ERROR',

    SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE',
    HANDLE_ERROR_MESSAGE = 'HANDLE_ERROR_MESSAGE',
    SHOW_INFORM_MESSAGE = 'SHOW_INFORM_MESSAGE',
    HANDLE_INFORM_MESSAGE = 'HANDLE_INFORM_MESSAGE',
}

// Action Creators
export const appActionCreators = {
    appStart: () => createAction(ActionTypeKeys.APP_START),
    appStop: () => createAction(ActionTypeKeys.APP_STOP),

    appAuthorize: () => createAction(ActionTypeKeys.APP_AUTHORIZED),
    appUnAuthorize: () => createAction(ActionTypeKeys.APP_UNAUTHORIZED),

    splashHide: () => createAction(ActionTypeKeys.SPLASH_HIDE),

    loadingStart: () => createAction(ActionTypeKeys.LOADING_START),
    loadingStop: () => createAction(ActionTypeKeys.LOADING_STOP),

    catchApiError: (payload: any) =>
        createAction(ActionTypeKeys.CATCH_API_ERROR, payload),
    catchApiSecureError: (payload: any) =>
        createAction(ActionTypeKeys.CATCH_API_SECURE_ERROR, payload),

    showErrorMessage: (message: string) =>
        createAction(ActionTypeKeys.SHOW_ERROR_MESSAGE, message),
    handleErrorMessage: () => createAction(ActionTypeKeys.HANDLE_ERROR_MESSAGE),

    showInformMessage: (message: string) =>
        createAction(ActionTypeKeys.SHOW_INFORM_MESSAGE, message),
    handleInformMessage: () =>
        createAction(ActionTypeKeys.HANDLE_INFORM_MESSAGE),
};

export interface State {
    isAppLoading: boolean;
    isAppAuthorized: boolean;
    isDataLoading: boolean;
    informMessage?: string;
    errorMessage?: string;
}

export const initialState: State = {
    isAppLoading: true,
    isAppAuthorized: false,
    isDataLoading: false,
};

export const appReducer: Reducer<State> = (
    state: State = initialState,
    action: AnyAction,
): State => {
    switch (action.type) {
        case ActionTypeKeys.APP_START:
            return {
                ...state,
                isAppLoading: true,
            };

        case ActionTypeKeys.APP_AUTHORIZED:
            return {
                ...state,
                isAppAuthorized: true,
            };

        case ActionTypeKeys.SPLASH_HIDE:
            return {
                ...state,
                isAppLoading: false,
            };

        case ActionTypeKeys.LOADING_START:
            return {
                ...state,
                isDataLoading: true,
            };
        case ActionTypeKeys.LOADING_STOP:
        case ActionTypeKeys.CATCH_API_ERROR:
        case ActionTypeKeys.CATCH_API_SECURE_ERROR:
            return {
                ...state,
                isDataLoading: false,
            };
        case ActionTypeKeys.APP_UNAUTHORIZED:
            return {
                ...state,
                isAppAuthorized: false,
            };

        case ActionTypeKeys.SHOW_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload,
            };

        case ActionTypeKeys.HANDLE_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: undefined,
            };

        case ActionTypeKeys.SHOW_INFORM_MESSAGE:
            return {
                ...state,
                informMessage: action.payload,
            };
        case ActionTypeKeys.HANDLE_INFORM_MESSAGE:
            return {
                ...state,
                informMessage: undefined,
            };

        case ActionTypeKeys.APP_STOP:
            return initialState;

        default:
            return state;
    }
};
