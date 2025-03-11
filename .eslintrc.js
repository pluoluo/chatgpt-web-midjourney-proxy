module.exports = {
  extends: [
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    'quote-props': 'off',
    '@typescript-eslint/quotes': 'off'
  }
}