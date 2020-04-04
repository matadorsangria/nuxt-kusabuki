module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'error',
      {
        'html': {
          'void': 'always',
        }
      }
    ],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        arrowParens: 'avoid',
        trailingComma: 'none',
        htmlWhitespaceSensitivity: 'ignore'
      }
    ]
  }
}
