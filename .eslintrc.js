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
    'plugin:nuxt/recommended',
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  plugins: []
  // add your custom rules here
}
