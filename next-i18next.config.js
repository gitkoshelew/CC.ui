const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localePath: path.resolve('./public/locales'),
  },
};
// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'ru',
//     debug: true,
//     detection: {
//       order: ['queryString', 'cookie'],
//       cache: ['cookie'],
//     },
//     interpolation: {
//       escapeValue: false,
//     },
//   });
