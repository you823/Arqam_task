import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslations from './locales/en/translations.json';
import arTranslations from './locales/ar/translations.json';

// Get language from localStorage or use browser language as fallback
const savedLanguage = localStorage.getItem('i18nextLng');
const browserLanguage = navigator.language.split('-')[0]; // gets 'en' from 'en-US'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations }
    },
    lng: savedLanguage || browserLanguage || 'en', // use saved language first
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Set initial HTML attributes
document.documentElement.lang = i18n.language;
document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

export default i18n;