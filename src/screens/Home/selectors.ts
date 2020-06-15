import { RootState } from '../../store/reducers';
import { Image } from '../../types';

export type ViewModel = {
    isLoading: boolean;
    isRefreshing: boolean;
    data: Image[];
};

export const getViewModel = ({ home, app }: RootState): ViewModel => ({
    isRefreshing: home.isRefreshing,
    isLoading: app.isDataLoading,
    data: home.data,
});
