import { RootState } from '../../store/reducers';
import { colors } from '../../common/themes';

export interface PopupViewModel {
    errorMessage?: string;
    informMessage?: string;
    backgroundColor: string;
}

export interface ProgressViewModel {
    isLoading: boolean;
}

export const getPopupViewModel = ({ app }: RootState): PopupViewModel => ({
    errorMessage: app.errorMessage,
    informMessage: app.informMessage,
    backgroundColor: app.informMessage ? colors.brand : colors.error,
});

export const getProgressViewModel = ({
    app,
}: RootState): ProgressViewModel => ({
    isLoading: app.isDataLoading,
});
