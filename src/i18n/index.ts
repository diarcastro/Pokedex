import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import getLanguage from 'utils/language';

import enTranslations from './locales/en/en.json';
import frTranslations from './locales/fr/fr.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
};

export const DEFAULT_LANGUAGE = 'en';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguage(),
    fallbackLng: ['en', 'fr'],

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
