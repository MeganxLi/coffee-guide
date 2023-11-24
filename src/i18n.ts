import i18n from 'i18next';
import Backend from "i18next-xhr-backend";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './asset/locales/en.json'
import zh from './asset/locales/zh.json'
import ja from './asset/locales/ja.json'
import ko from './asset/locales/ko.json'
import ms from './asset/locales/ms.json'
import th from './asset/locales/th.json'

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
  ja: {
    translation: ja,
  },
  ko: {
    translation: ko,
  },
  ms: {
    translation: ms,
  },
  th: {
    translation: th,
  },
};

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    resources,
    lng: 'zh',             //預設語言
    fallbackLng: 'zh',     //如果當前切換的語言沒有對應的翻譯則使用這個語言，
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  });

export default i18n;
