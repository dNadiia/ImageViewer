import React from 'react';
import { View } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';
import { colors } from '../../themes';
import { styles } from './styles';

interface Props {
    isLoading: boolean;
}

export const ProgressView = (props: Props) => {
    return props.isLoading ? (
        <View style={styles.container}>
            <View style={styles.overlay}>
                <MaterialIndicator
                    color={colors.white}
                    animating={true}
                    size={52}
                />
            </View>
        </View>
    ) : (
        <View />
    );
};
