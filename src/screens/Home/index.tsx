import React from 'react';
import { View, Text } from 'react-native';
import { localize } from '../../common/localizations';
import { styles } from './styles';

export const Home = () => (
    <View style={styles.container}>
        <Text>{localize('screen.home')}</Text>
    </View>
);
