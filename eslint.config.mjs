import tseslint from 'typescript-eslint'
import recommended from './src/recommended.mjs'


const rules = {
  'import/no-extraneous-dependencies': 0,
  'unicorn/filename-case': [
    2,
    {
      cases: {
        camelCase: false,
        kebabCase: true,
        pascalCase: false,
        snakeCase: true,
      },
    },
  ],
}

export default tseslint.config({
  extends: [
    ...recommended,
  ],
  languageOptions: {
    parserOptions: {
      project: 'tsconfig.eslint.json',
    },
  },
  rules,
})

