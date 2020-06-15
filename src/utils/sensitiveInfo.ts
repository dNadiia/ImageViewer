import SInfo from 'react-native-sensitive-info';

const options = {
    sharedPreferencesName: 'ImageViewerSharedPrefs',
    keychainService: 'ImageViewerKeychain',
};

const values = {
    accessToken: 'accessToken',
};

export function setToken(token: string) {
    return SInfo.setItem(values.accessToken, token, options);
}

export function getToken(): Promise<string> {
    return SInfo.getItem(values.accessToken, options);
}

export function resetToken() {
    return SInfo.deleteItem(values.accessToken, options);
}
