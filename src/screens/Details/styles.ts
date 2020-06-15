import { StyleSheet } from 'react-native';
import { colors } from '../../common/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    image: {
        width: '95%',
        aspectRatio: 1,
    },
});
