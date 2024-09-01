import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from './locales/arabic.json';
import en from './locales/english.json';

export const resources = {
  'en': {
    global: en,
  },
  'ar': {
    global: ar
  },
}

const storedLang = localStorage.getItem("lang");
const currentLang = storedLang
   !== null ? storedLang : "en";

i18n
  .use(initReactI18next)
  .init({
    defaultNS: 'global',
    resources,
    lng: currentLang,
    interpolation: {
      escapeValue: false
    }
  });
