import { combineReducers } from 'redux';
import {
    appReducer,
    initialState as appInitialState,
    State as appState,
} from './appReducer';
import {
    navigationReducer,
    initialState as navigationInitialState,
    State as navigationState,
} from './navigationReducer';

export interface RootState {
    app: appState;
    navigation: navigationState;
}

const initialState: RootState = {
    app: appInitialState,
    navigation: navigationInitialState,
};

export const reducers = combineReducers({
    app: appReducer,
    navigation: navigationReducer,
});
