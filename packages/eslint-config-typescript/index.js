module.exports = {
  'root': true,
  'extends': ['plugin:@typescript-eslint/recommended'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'semi': ['error', 'always'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-extra-semi': 'error',
    'brace-style': ['error', '1tbs'],
    'quotes': ['error', 'single'],
    'eqeqeq': 'error',
    'no-var': 'error',
    'curly': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'prefer-const': 'error',
    'spaced-comment': 'error',
    'arrow-spacing': ['error', { 'before':  true, 'after':  true }],
    'space-before-blocks': ['error', 'always'],
    'prefer-template': 'error',
    'no-shadow-restricted-names': 'error',
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    '@typescript-eslint/explicit-function-return-type': ['error', { 'allowExpressions':  true }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/array-type': ['error', { 'default': 'array' }]
  }
};
