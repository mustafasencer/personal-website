module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'curly': 'error',
    "no-use-before-define": "off",
    '@typescript-eslint/interface-name-prefix': 'off',
    "@typescript-eslint/no-use-before-define": ["error"],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': false }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '6.14.6'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
