import React, { useEffect, useState } from 'react';
import { View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { RootState } from '../../store/reducers';
import { actionCreators } from './detailsReducer';
import { ViewModel, getViewModel } from './selectors';
import { getNavigationParams } from '../../navigator';
import { FullScreen } from './components/FullScreen';
import { Footer } from './components/Footer';
import { styles } from './styles';

type Props = ViewModel & {
    getImageDetails: (imageId: string) => void;
    clearImageDetails: () => void;
};

export const DetailsComponent = ({ data, ...rest }: Props) => {
    const { imageId } = getNavigationParams();
    const [fullScreen, setFullScreen] = useState(false);

    useEffect(() => {
        rest.getImageDetails(imageId);

        return () => rest.clearImageDetails();
    }, []);

    const onFullScreenOpen = () => setFullScreen(true);

    const onFullScreenClose = () => setFullScreen(false);

    const onSharePress = () => {};

    return (
        <View style={styles.container}>
            {data && (
                <View style={styles.content}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={onFullScreenOpen}
                    >
                        <Image
                            source={{
                                uri: data.full_picture,
                            }}
                            style={styles.image}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                    <Footer
                        title={data.author}
                        subtitle={data.camera}
                        onSharePress={onSharePress}
                    />
                    <FullScreen
                        imageUrl={data.full_picture}
                        isVisible={fullScreen}
                        onClose={onFullScreenClose}
                    />
                </View>
            )}
            <SafeAreaView />
        </View>
    );
};

const mapStateToProps = (state: RootState) => getViewModel(state);

const mapDispatchToProps = {
    getImageDetails: actionCreators.getImageDetailsRequest,
    clearImageDetails: actionCreators.clearImageDetails,
};

export const Details = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetailsComponent);
