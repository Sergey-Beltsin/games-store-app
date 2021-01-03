const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    'react/jsx-filename-extension': 0,
    'import/extensions': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(__dirname, 'src')],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.tsx'],
      },
    },
  },
};
