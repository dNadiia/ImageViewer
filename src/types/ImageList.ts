import { Image } from './Image';

export type ImageList = {
    hasMore: boolean;
    page: number;
    pageCount: number;
    pictures: Image[];
};
