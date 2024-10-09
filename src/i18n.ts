import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../public/locales/en/translation.json';
import translationSK from '../public/locales/sk/translation.json';

// Translation resources
const resources = {
  en: {
    translation: translationEN,
  },
  sk: {
    translation: translationSK,
  },
};

i18n
  .use(LanguageDetector) // Automatically detects user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Fallback language if user's language is not available
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
