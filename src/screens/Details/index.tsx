import React, { useEffect } from 'react';
import { Image, SafeAreaView, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { RootState } from '../../store/reducers';
import { actionCreators } from './detailsReducer';
import { ViewModel, getViewModel } from './selectors';
import { getNavigationParams } from '../../navigator';
import { styles } from './styles';

type Props = ViewModel & {
    getImageDetails: (imageId: string) => void;
    refreshImages: () => void;
};

export const DetailsComponent = ({ data, ...rest }: Props) => {
    const { imageId } = getNavigationParams();

    useEffect(() => {
        rest.getImageDetails(imageId);
    }, []);

    return (
        <View style={styles.container}>
            {data && (
                <ScrollView>
                    <Image source={{ uri: data.full_picture }} />
                </ScrollView>
            )}
            <SafeAreaView />
        </View>
    );
};

const mapStateToProps = (state: RootState) => getViewModel(state);

const mapDispatchToProps = {
    getImageDetails: actionCreators.getImageDetailsRequest,
};

export const Details = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetailsComponent);
