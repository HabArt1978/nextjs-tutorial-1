import { FlatCompat } from '@eslint/eslintrc'
import prettierPlugin from 'eslint-plugin-prettier'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier',
    'plugin:prettier/recommended'
  ),
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: false,
          useTabs: false,
          tabWidth: 2,
          singleQuote: true,
          bracketSpacing: true,
          printWidth: 80,
          trailingComma: 'none',
          endOfLine: 'auto',
          singleAttributePerLine: true
        }
      ]
    }
  }
]

export default eslintConfig
