import { RootState } from '../store/reducers';

export interface ViewModel {
    isAppLoading: boolean;
}

export const getViewModel = ({ app }: RootState): ViewModel => ({
    isAppLoading: app.isAppLoading,
});
