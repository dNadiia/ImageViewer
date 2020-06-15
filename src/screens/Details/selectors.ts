import { RootState } from '../../store/reducers';
import { ImageDetails } from '../../types';

export type ViewModel = {
    data?: ImageDetails;
};

export const getViewModel = ({ details }: RootState): ViewModel => ({
    data: details.data,
});
