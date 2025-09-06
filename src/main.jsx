import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import locales from './assets/locales.js';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: 'en',
    detection: {
      order: [
        'cookie',
        'htmlTag',
        'querystring',
        'localStorage',
        'sessionStorage',
        'navigator',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    resources: locales,
    react: {
      useSuspense: false,
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
