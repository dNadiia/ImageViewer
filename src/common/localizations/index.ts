import i18n from 'i18n-js';
import { findBestAvailableLanguage } from 'react-native-localize';
import en from './en.json';

const translations = { en };

i18n.translations = translations;
i18n.fallbacks = false;

const fallback = { languageTag: 'en' };
const { languageTag } =
    findBestAvailableLanguage(Object.keys(i18n.translations)) || fallback;

i18n.locale = languageTag;

export const localize = (key: string, params?: object) => i18n.t(key, params);
