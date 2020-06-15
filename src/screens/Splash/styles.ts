import { StyleSheet } from 'react-native';
import { colors } from '../../common/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black,
    },
    text: {
        fontWeight: '500',
        marginHorizontal: 20,
        textAlign: 'center',
        color: colors.white,
    },
});
