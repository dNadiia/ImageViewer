import { StyleSheet } from 'react-native';
import { colors } from '../../../../common/themes';

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 20,
    },
    subtitle: {
        color: colors.white,
        fontSize: 16,
        marginVertical: 5,
    },
});
