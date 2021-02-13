module.exports = {
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  pages: {
    '*': ['common', 'nav', '404'],
    '/': ['[name]'],
    'rgx:/id': ['id', 'countries'],
    'rgx:/account': ['account'],
    'rgx:/store': ['products'],
  },
  loadLocaleFrom: (lang, ns) => import(`./public/translations/${lang}/${ns}.json`).then((m) => m.default),
};
