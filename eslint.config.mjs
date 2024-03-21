import eslint from 'typescript-eslint'
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

// https://typescript-eslint.io/packages/typescript-eslint/#config
export default eslint.config({
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

