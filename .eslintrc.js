module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
      }
    ]
  }
};
