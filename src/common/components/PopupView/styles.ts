import { StyleSheet } from 'react-native';
import { colors, borderRadius16, shadow } from '../../themes';
import { statusBarHeight, isPlatformIOS } from '../../../utils/device';

export const styles = StyleSheet.create({
    modal: {
        margin: 16,
        justifyContent: 'flex-start',
    },
    container: {
        ...shadow,
        ...borderRadius16,
        padding: 16,
        marginTop: isPlatformIOS ? statusBarHeight : 0,
        backgroundColor: colors.white,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontWeight: '500',
    },
});
