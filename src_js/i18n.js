module.exports = {
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  pages: {
    '*': ['common'],
    '/': ['home'],
  },
  loadLocaleFrom: (lang, ns) => import(`./public/translations/${lang}/${ns}.json`).then((m) => m.default),
};
