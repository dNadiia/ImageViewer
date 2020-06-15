import { AnyAction, Reducer } from 'redux';
import { createAction } from '../../store/Action';
import { ImageDetails } from '../../types';

// Actions
export enum ActionTypeKeys {
    GET_IMAGE_DETAILS_REQUEST = 'GET_IMAGE_DETAILS_REQUEST',
    GET_IMAGE_DETAILS_SUCCESS = 'GET_IMAGE_DETAILS_SUCCESS',
    CLEAR_IMAGE_DETAILS = 'CLEAR_IMAGE_DETAILS',
}

// Action Creators
export const actionCreators = {
    getImageDetailsRequest: (imageId: string) =>
        createAction(ActionTypeKeys.GET_IMAGE_DETAILS_REQUEST, imageId),
    getImageDetailsSuccess: (payload: ImageDetails) =>
        createAction(ActionTypeKeys.GET_IMAGE_DETAILS_SUCCESS, payload),

    clearImageDetails: () => createAction(ActionTypeKeys.CLEAR_IMAGE_DETAILS),
};

export interface State {
    data?: ImageDetails;
}

export const initialState: State = {};

export const detailsReducer: Reducer<State> = (
    state: State = initialState,
    action: AnyAction,
): State => {
    switch (action.type) {
        case ActionTypeKeys.CLEAR_IMAGE_DETAILS:
            return {
                ...state,
                data: undefined,
            };

        case ActionTypeKeys.GET_IMAGE_DETAILS_SUCCESS:
            return {
                ...state,
                data: action.payload,
            };

        default:
            return state;
    }
};
