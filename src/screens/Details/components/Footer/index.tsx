import React from 'react';
import { Text, View } from 'react-native';
import { ShareButton } from '../ShareButton';
import { styles } from './styles';

type Props = {
    title: string;
    subtitle: string;
    onSharePress: () => void;
};

export const Footer = ({ title, subtitle, onSharePress }: Props) => (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <ShareButton onPress={onSharePress} />
    </View>
);
