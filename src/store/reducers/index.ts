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
import {
    homeReducer,
    initialState as homeInitialState,
    State as homeState,
} from '../../screens/Home/homeReducer';

export interface RootState {
    app: appState;
    navigation: navigationState;
    home: homeState;
}

const initialState: RootState = {
    app: appInitialState,
    navigation: navigationInitialState,
    home: homeInitialState,
};

export const reducers = combineReducers({
    app: appReducer,
    navigation: navigationReducer,
    home: homeReducer,
});
