import { Platform, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const isPlatformIOS = Platform.OS === 'ios';

export const isPlatformAndroid = Platform.OS === 'android';

export const screen = Dimensions.get('window');

export const statusBarHeight = getStatusBarHeight();
