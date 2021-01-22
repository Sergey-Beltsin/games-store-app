module.exports = {
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  pages: {
    '*': ['common', 'nav'],
    '/': ['[name]'],
  },
  loadLocaleFrom: (lang, ns) => import(`./public/translations/${lang}/${ns}.json`).then((m) => m.default),
};
