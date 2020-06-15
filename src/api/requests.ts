import axios from 'axios';
import { baseURL } from './config';
import { parseErrorStatusCode } from './errors';
import { refreshToken, token } from './token';

const createAxiosInstance = () => {
    const instance = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    instance.interceptors.request.use(async (request) => {
        __DEV__ && console.log('Request:', request);
        return request;
    });

    instance.interceptors.response.use(
        (response) => {
            __DEV__ && console.log('Response: ', response);
            return response;
        },
        (error) => {
            __DEV__ && console.log('Error: ', error.response);
            return Promise.reject(error);
        },
    );

    return instance;
};

const createSecureAxiosInstance = () => {
    const instance = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    instance.interceptors.request.use(async (request) => {
        request.headers['Authorization'] = `Bearer ${token}`;
        __DEV__ && console.log('Request:', request);
        return request;
    });

    instance.interceptors.response.use(
        (response) => {
            __DEV__ && console.log('Response: ', response);
            return response;
        },
        (error) => {
            if (parseErrorStatusCode(error) === 401) {
                return refreshToken(error);
            }
            __DEV__ && console.log('Error: ', error.response);
            return Promise.reject(error);
        },
    );

    return instance;
};

export const apiRequest = createAxiosInstance();

export const apiRequestSecure = createSecureAxiosInstance();
