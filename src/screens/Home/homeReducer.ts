import { AnyAction, Reducer } from 'redux';
import { createAction } from '../../store/Action';
import { Image, ImageList } from '../../types';

// Actions
export enum ActionTypeKeys {
    GET_IMAGES_REQUEST = 'GET_IMAGES_REQUEST',
    GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS',

    REFRESH_IMAGES_REQUEST = 'REFRESH_IMAGES_REQUEST',
    REFRESH_IMAGES_SUCCESS = 'REFRESH_IMAGES_SUCCESS',
    REFRESH_IMAGES_FAILED = 'REFRESH_IMAGES_FAILED',
}

// Action Creators
export const actionCreators = {
    getImagesRequest: () => createAction(ActionTypeKeys.GET_IMAGES_REQUEST),
    getImagesSuccess: (payload: ImageList[]) =>
        createAction(ActionTypeKeys.GET_IMAGES_SUCCESS, payload),

    refreshImagesRequest: () =>
        createAction(ActionTypeKeys.REFRESH_IMAGES_REQUEST),
    refreshImagesSuccess: (payload: ImageList[]) =>
        createAction(ActionTypeKeys.REFRESH_IMAGES_SUCCESS, payload),
    refreshImagesFailed: () =>
        createAction(ActionTypeKeys.REFRESH_IMAGES_FAILED),
};

export interface State {
    isRefreshing: boolean;
    data: Image[];
    page: number;
    pageCount: number;
}

export const initialState: State = {
    isRefreshing: false,
    data: [],
    page: 1,
    pageCount: 1,
};

export const homeReducer: Reducer<State> = (
    state: State = initialState,
    action: AnyAction,
): State => {
    switch (action.type) {
        case ActionTypeKeys.GET_IMAGES_SUCCESS:
            return {
                ...state,
                page: action.payload.page + 1,
                pageCount: action.payload.pageCount,
                data: [...state.data, ...action.payload.pictures],
            };

        case ActionTypeKeys.REFRESH_IMAGES_REQUEST:
            return {
                ...state,
                page: 1,
                pageCount: 1,
                isRefreshing: true,
            };

        case ActionTypeKeys.REFRESH_IMAGES_FAILED:
            return {
                ...state,
                isRefreshing: false,
            };

        case ActionTypeKeys.REFRESH_IMAGES_SUCCESS:
            return {
                ...state,
                isRefreshing: false,
                page: action.payload.page,
                pageCount: action.payload.pageCount,
                data: action.payload.pictures,
            };

        default:
            return state;
    }
};
