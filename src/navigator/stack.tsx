import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { RootState } from '../store/reducers';
import { getViewModel, ViewModel } from './selectors';
import { Routes } from './routes';
import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();

export const RootStackComponent = ({ isAppLoading }: ViewModel) => (
    <Stack.Navigator initialRouteName={Routes.Splash} headerMode={'none'}>
        {isAppLoading ? (
            <Stack.Screen name={Routes.Splash} component={Splash} />
        ) : (
            <Stack.Screen name={Routes.Home} component={Home} />
        )}
    </Stack.Navigator>
);

const mapStateToProps = (state: RootState) => getViewModel(state);

const mapDispatchToProps = {};

export const RootStack = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RootStackComponent);
