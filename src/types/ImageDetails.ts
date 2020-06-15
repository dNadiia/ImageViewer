import { Image } from './Image';

export type ImageDetails = Image & {
    author: string;
    camera: string;
    full_picture: string;
    tags: string;
};
