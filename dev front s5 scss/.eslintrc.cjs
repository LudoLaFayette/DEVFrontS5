/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier/skip-formatting', 'plugin:storybook/recommended'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        "no-console": "error",
        "indent": ["error", 4],
        "vue/html-indent" : ["error", 4]
    }
}

