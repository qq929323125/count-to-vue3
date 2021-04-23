/*
 * @Author: your name
 * @Date: 2021-04-23 09:10:33
 * @LastEditTime: 2021-04-23 15:49:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \count-to-vue3\.eslintrc.js
 */
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/prettier",
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-constant-condition": ["error", { checkLoops: false }],
        indent: [2, 4, { SwitchCase: 1 }],
        "prettier/prettier": [2, { tabWidth: 4 }],
        "no-console": "off",
        "no-debugger": "off",
    },
};
