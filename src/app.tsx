import React from 'react';
import { Provider } from 'react-redux';
import { RootContainer, RootPopupView, RootProgressView } from './screens/Root';
import configureStore from './store';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <RootContainer />
        <RootProgressView />
        <RootPopupView />
    </Provider>
);

export default App;
