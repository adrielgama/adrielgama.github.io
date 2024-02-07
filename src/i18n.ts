import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import * as translations from './translations/'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        aboutMe: translations.enAboutMe,
        projects: translations.enProjects,
        language: translations.enLanguage,
      },
    },
    pt: {
      translation: {
        aboutMe: translations.ptAboutMe,
        projects: translations.ptProjects,
        language: translations.ptLanguage,
      },
    },
  },
  // detection: options,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
