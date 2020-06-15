import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

type Props = {
    imageUrl: string;
    onPress: () => void;
};

export const ListItem = ({ imageUrl, onPress }: Props) => (
    <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.5}
    >
        <Image
            style={styles.image}
            resizeMode={'cover'}
            source={{ uri: imageUrl }}
        />
    </TouchableOpacity>
);
