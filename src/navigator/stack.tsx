import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { RootState } from '../store/reducers';
import { getViewModel, ViewModel } from './selectors';
import { Routes } from './routes';
import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { localize } from '../common/localizations';
import { colors } from '../common/themes';

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator
        initialRouteName={Routes.Home}
        headerMode={'screen'}
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.brand,
            },
            headerTintColor: colors.white,
        }}
    >
        <Stack.Screen
            name={Routes.Home}
            component={Home}
            options={{
                title: localize('screen.home'),
            }}
        />
        <Stack.Screen
            name={Routes.Details}
            component={Details}
            options={{
                title: localize('screen.details'),
            }}
        />
    </Stack.Navigator>
);

export const RootStackComponent = ({ isAppLoading }: ViewModel) => (
    <Stack.Navigator initialRouteName={Routes.Splash} headerMode={'none'}>
        {isAppLoading ? (
            <Stack.Screen name={Routes.Splash} component={Splash} />
        ) : (
            <Stack.Screen name={Routes.Home} component={HomeStack} />
        )}
    </Stack.Navigator>
);

const mapStateToProps = (state: RootState) => getViewModel(state);

const mapDispatchToProps = {};

export const RootStack = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RootStackComponent);
