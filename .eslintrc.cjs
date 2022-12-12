/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  // add your custom rules here
  rules: {
    semi: [0, 'never'],
    // 'vue/multi-word-component-names': [
    //   'error',
    //   {
    //     ignores: ['default', 'Login', 'Home', 'About'],
    //   },
    // ],
    // 'vue/no-deprecated-slot-attribute': 'off',
  },
}

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true,
//   },
//   extends: [
//     '@nuxtjs/eslint-config-typescript',
//     'plugin:nuxt/recommended',
//     'prettier', // 포매팅 충돌 방지를 위해
//   ],
//   plugins: [],

//   rules: {},
// };
