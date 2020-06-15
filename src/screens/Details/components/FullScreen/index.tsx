import React from 'react';
import { Modal, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

type Props = {
    imageUrl: string;
    isVisible: boolean;
    onClose: () => void;
};

export const FullScreen = ({ imageUrl, isVisible, onClose }: Props) => (
    <Modal visible={isVisible} transparent={true}>
        <ImageViewer
            imageUrls={[
                {
                    url: imageUrl,
                },
            ]}
            renderIndicator={() => <View />}
            onSwipeDown={onClose}
            enableSwipeDown={true}
            onDoubleClick={onClose}
        />
    </Modal>
);
