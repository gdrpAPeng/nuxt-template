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
      "eslint:recommended",
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      "plugin:vue/recommended",
      // "plugin:prettier/recommended"
    ],
    // 校验 .vue 文件
    plugins: [
      'vue'
    ],
    // 自定义规则
    rules: {
      "indent": [
        'error',
        2,
        {
          SwitchCase: 1,
          flatTernaryExpressions: true
        }
      ],
      "quotes": ["error", "single"],
      "semi": [2, "never"],
      "no-console": "off",
      "vue/max-attributes-per-line": "off",
      // "prettier/prettier": ["error", { "semi": false }]
    }
  }