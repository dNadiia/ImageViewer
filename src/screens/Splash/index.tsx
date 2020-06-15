import React from 'react';
import { View, Text } from 'react-native';
import { localize } from '../../common/localizations';
import { styles } from './styles';

export const Splash = () => (
    <View style={styles.container}>
        <Text>{localize('screen.splash')}</Text>
    </View>
);
