import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  js.configs.recommended, // 直接使用官方推荐配置对象，更完整
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      // 你自定义的 Vue 规则
      'vue/multi-word-component-names': ['warn', { ignores: ['index'] }],
      'vue/no-setup-props-destructure': ['off']
    }
  },
  ...pluginVue.configs['flat/essential'],
  eslintConfigPrettier // 放在最后，关闭所有和 Prettier 冲突的 ESLint 规则
]
