import { configs as jsEslintConfig } from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import importXPlugin from 'eslint-plugin-import-x'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import importSortPlugin from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import { configs as tsEslintConfig } from 'typescript-eslint'

/** @type {import('eslint').Linter.Config} */
export default [
  jsEslintConfig.recommended,
  ...tsEslintConfig.recommended,
  importXPlugin.flatConfigs.recommended,
  importXPlugin.flatConfigs.typescript,
  prettierPlugin,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules/', '.wrangler/', '!**/.server', '!**/.client', 'build/'],
    plugins: {
      'import-sort': importSortPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      formComponents: ['Form'],
      linkComponents: [
        { name: 'Link', linkAttribute: 'to' },
        { name: 'NavLink', linkAttribute: 'to' },
      ],
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.builtin,
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // ? eslint
      'no-console': ['warn', { allow: ['info', 'debug', 'error', 'warn', 'trace'] }],

      // ? import-sort
      'import-sort/imports': 'warn',
      'import-sort/exports': 'warn',

      // ? import
      'import-x/export': 'warn',
      'import-x/first': 'warn',
      'import-x/newline-after-import': 'warn',
      'import-x/no-absolute-path': ['warn', { esmodule: true, commonjs: true, amd: false }],
      'import-x/no-duplicates': 'warn',
      'import-x/no-named-default': 'warn',
      'import-x/no-webpack-loader-syntax': 'warn',

      // ? react
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactPlugin.configs.flat['jsx-runtime'].rules,

      // ? jsx a11y
      ...jsxA11yPlugin.flatConfigs.recommended.rules,
    },
  },
]
