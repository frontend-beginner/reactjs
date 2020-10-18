import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_US from './locales/en-US';
import vi_VN from './locales/vi-VN';

const resources = {
    en: {
        translation: en_US
    },
    vi: {
        translation: vi_VN
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "vi",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;