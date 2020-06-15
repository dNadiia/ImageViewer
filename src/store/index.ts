import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { reducers } from './reducers';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancer = __DEV__
    ? composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
    : compose(applyMiddleware(sagaMiddleware));

const configureStore = () => {
    const store = createStore(reducers, enhancer);
    sagaMiddleware.run(sagas);
    return store;
};

export default configureStore;
