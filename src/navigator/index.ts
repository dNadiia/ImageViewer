import {
    useRoute,
    NavigationContainer,
    useNavigation,
    useFocusEffect,
} from '@react-navigation/native';
export { RootStack } from './stack';
export { Routes } from './routes';
export {
    back,
    navigate,
    setTopLevelNavigator,
    isSetTopLevelNavigator,
} from './transitions';

// const getNavigation = useNavigation;
const getNavigationParams = (): any => useRoute().params;
// const useFocus = useFocusEffect;

export {
    NavigationContainer as AppContainer,
    getNavigationParams,
    // getNavigation,
    // useFocus,
};
