import {
    DrawerActions,
    StackActions,
    CommonActions,
    NavigationContainerRef,
} from '@react-navigation/native';
import { isPlatformIOS } from '../utils/device';
import { Routes } from './routes';

let _navigator: NavigationContainerRef;

export function setTopLevelNavigator(navigatorRef: NavigationContainerRef) {
    _navigator = navigatorRef;
}

export function isSetTopLevelNavigator() {
    return isPlatformIOS ? _navigator !== undefined : _navigator !== null;
}

export function navigate(name: Routes, params?: any) {
    _navigator.dispatch(
        CommonActions.navigate({
            name,
            params,
        }),
    );
}

export function back() {
    _navigator.dispatch(CommonActions.goBack());
}
