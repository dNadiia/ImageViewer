import { AnyAction } from 'redux';

export interface ActionWithPayload<T = any> extends AnyAction {
    type: string;
    payload?: T;
}

export interface Action extends AnyAction {
    type: string;
}

// export function createAction(type: string): Action;
// export function createAction<T>(
//     type: string,
//     payload?: T,
// ): ActionWithPayload<T>;
//

export function createAction<T>(type: string, payload?: T): ActionWithPayload {
    return {
        type,
        payload,
    };
}
