module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0,
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': ["error", { "skipBlankLines": true }],
  },
};
