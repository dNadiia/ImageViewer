import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.black,
        opacity: 0.5,
    },
});
