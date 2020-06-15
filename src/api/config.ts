export const baseURL = 'http://interview.agileengine.com';

export const apiKey = '23567b218376f79d9415';

export const endpoints = {
    auth: '/auth',
    images: (page: number) => `/images?page=${page}`,
    imageDetails: (imageId: number) => `/images/${imageId}`,
};
