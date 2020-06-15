import axios from 'axios';
import { getToken, setToken, resetToken } from '../utils/sensitiveInfo';
import { services } from './services';

let _token: string;

let isAlreadyFetchingAccessToken = false;

let subscribers: any = [];

async function initialize() {
    _token = await getToken();
}

async function saveToken(token: string) {
    _token = token;
    await setToken(token);
}

async function clearTokens() {
    await resetToken();
}

async function refreshTokenAndReattemptRequest(error: any) {
    try {
        const { response: errorResponse } = error;

        if (!_token) {
            __DEV__ && console.log('Refresh and Access Tokens Empty');
            subscribers = [];
            return Promise.reject();
        }

        const retryOriginalRequest = new Promise((resolve) => {
            addSubscriber((_accessToken: string) => {
                errorResponse.config.headers.Authentication = _accessToken;
                resolve(axios(errorResponse.config));
            });
        });

        if (!isAlreadyFetchingAccessToken) {
            isAlreadyFetchingAccessToken = true;
            const response = await services.auth();

            if (!response.data) {
                __DEV__ &&
                    console.log('Refresh Token Unexpect: ', error.response);
                subscribers = [];
                return Promise.reject();
            }

            const { token } = response.data;
            await saveToken(token);

            isAlreadyFetchingAccessToken = false;
            onAccessTokenFetched(token);
        }
        return retryOriginalRequest;
    } catch (err) {
        __DEV__ && console.log('Refresh Token Error: ', err.response);
        subscribers = [];
        return Promise.reject();
    }
}

function onAccessTokenFetched(token: string) {
    subscribers.forEach((callback: any) => {
        callback(token);
        __DEV__ && console.log('Retry:', callback);
    });
    subscribers = [];
}

function addSubscriber(callback: any) {
    subscribers.push(callback);
}

export {
    initialize,
    saveToken,
    clearTokens,
    _token as token,
    refreshTokenAndReattemptRequest as refreshToken,
};
