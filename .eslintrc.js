module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  settings: {
    'import/core-modules': ['ember', 'picus'],
  },
  rules: {
    'no-unused-vars': ['error', { args: 'none' }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false },
    ],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': ['error', { props: false }],
    "function-paren-newline": ["error", "consistent"],
    "semi-style": "off",
  },
  globals: {
    server: true,
    emberFormForFind: true,
    emberFormButton: true,
  },
};
