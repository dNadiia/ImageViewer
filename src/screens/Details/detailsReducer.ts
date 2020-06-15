import { AnyAction, Reducer } from 'redux';
import { createAction } from '../../store/Action';
import { ImageDetails } from '../../types';

// Actions
export enum ActionTypeKeys {
    GET_IMAGE_DETAILS_REQUEST = 'GET_IMAGE_DETAILS_REQUEST',
    GET_IMAGE_DETAILS_SUCCESS = 'GET_IMAGE_DETAILS_SUCCESS',
    GET_IMAGE_DETAILS_FAILED = 'GET_IMAGE_DETAILS_FAILED',
}

// Action Creators
export const actionCreators = {
    getImageDetailsRequest: (imageId: string) =>
        createAction(ActionTypeKeys.GET_IMAGE_DETAILS_REQUEST, imageId),
    getImageDetailsSuccess: (payload: ImageDetails) =>
        createAction(ActionTypeKeys.GET_IMAGE_DETAILS_SUCCESS, payload),
    getImageDetailsFailed: () =>
        createAction(ActionTypeKeys.GET_IMAGE_DETAILS_FAILED),
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
        case ActionTypeKeys.GET_IMAGE_DETAILS_SUCCESS:
            return {
                ...state,
                data: action.payload,
            };

        default:
            return state;
    }
};
