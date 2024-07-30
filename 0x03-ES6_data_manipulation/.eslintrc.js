module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:node/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'constructor-super': 'error',
    'no-use-before-define': ['error', { functions: false }],
    'semi': ['error', 'always'],
    'no-console': 'off',
    'react/prop-types': 'off', // Example: Turn off prop-types rule for React
  },
  plugins: [
    'import',
    'node',
    'promise',
    'react',
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
};
