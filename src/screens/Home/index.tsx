import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, RefreshControl, View } from 'react-native';
import { connect } from 'react-redux';
import { RootState } from '../../store/reducers';
import {
    navigationActionCreators,
    NavigationPayload,
} from '../../store/reducers/navigationReducer';
import { actionCreators } from './homeReducer';
import { ViewModel, getViewModel } from './selectors';
import { ListItem } from './components/ListItem';
import { colors } from '../../common/themes';
import { styles } from './styles';
import { Image } from '../../types';
import { Routes } from '../../navigator';

type Props = ViewModel & {
    getImages: () => void;
    refreshImages: () => void;
    navigate: (payload: NavigationPayload) => void;
};

export const HomeComponent = ({
    data,
    isRefreshing,
    isLoading,
    ...rest
}: Props) => {
    useEffect(() => {
        onLoadMore();
    }, []);

    const onLoadMore = () => {
        !isLoading && !isRefreshing && rest.getImages();
    };

    const onRefresh = () => {
        !isLoading && !isRefreshing && rest.refreshImages();
    };

    const onImagePress = (item: Image) =>
        rest.navigate({ name: Routes.Details, params: { imageId: item.id } });

    return (
        <View style={styles.container}>
            <FlatList
                refreshControl={
                    <RefreshControl
                        tintColor={colors.white}
                        refreshing={isRefreshing}
                        onRefresh={onRefresh}
                    />
                }
                initialNumToRender={20}
                data={data}
                numColumns={2}
                renderItem={({ item }) => (
                    <ListItem
                        imageUrl={item.cropped_picture}
                        onPress={() => onImagePress(item)}
                    />
                )}
                contentContainerStyle={styles.container}
                keyExtractor={(item, index) => `${item.id}${index}`}
                onEndReached={onLoadMore}
                onEndReachedThreshold={0.4}
            />
            <SafeAreaView />
        </View>
    );
};

const mapStateToProps = (state: RootState) => getViewModel(state);

const mapDispatchToProps = {
    getImages: actionCreators.getImagesRequest,
    refreshImages: actionCreators.refreshImagesRequest,
    navigate: navigationActionCreators.navigate,
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
