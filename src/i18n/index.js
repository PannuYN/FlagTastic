import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import my from './my.json';
import ko from './ko.json';
import ja from './ja.json';
import zh from './zh.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      my: { translation: my },
      ko: { translation: ko },
      ja: { translation: ja },
      zh: { translation: zh }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
