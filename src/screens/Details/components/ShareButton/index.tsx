import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { sources } from '../../../../common/themes';
import { styles } from './styles';

type Props = {
    onPress: () => void;
};

export const ShareButton = ({ onPress }: Props) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image
            source={sources.icons.share}
            style={styles.image}
            resizeMode={'contain'}
        />
    </TouchableOpacity>
);
