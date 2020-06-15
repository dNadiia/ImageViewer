import { AnyAction, Reducer } from 'redux';
import { createAction } from '../Action';

export interface NavigationPayload {
    name: string;
    params?: any;
}

// Actions
export enum ActionTypeKeys {
    NAVIGATE = 'NAVIGATION/NAVIGATE',
    NAVIGATE_FAILED = 'NAVIGATION/NAVIGATE_FAILED',

    BACK = 'NAVIGATION/BACK',
    BACK_FAILED = 'NAVIGATION/BACK_FAILED',
}

// Action Creators
export const navigationActionCreators = {
    navigate: (payload: NavigationPayload) =>
        createAction(ActionTypeKeys.NAVIGATE, payload),
    navigateFailed: () => createAction(ActionTypeKeys.NAVIGATE_FAILED),

    back: () => createAction(ActionTypeKeys.BACK),
    backFailed: () => createAction(ActionTypeKeys.BACK_FAILED),
};

export interface State {}

export const initialState: State = {};

export const navigationReducer: Reducer<State> = (
    state: State = initialState,
    action: AnyAction,
): State => {
    switch (action.type) {
        default:
            return state;
    }
};
