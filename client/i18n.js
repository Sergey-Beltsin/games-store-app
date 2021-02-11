module.exports = {
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  pages: {
    '*': ['common', 'nav'],
    '/': ['[name]'],
    'rgx:/id': ['id', 'countries'],
  },
  loadLocaleFrom: (lang, ns) => import(`./public/translations/${lang}/${ns}.json`).then((m) => m.default),
};
