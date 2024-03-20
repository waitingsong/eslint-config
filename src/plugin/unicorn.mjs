// https://github.com/sindresorhus/eslint-plugin-unicorn#readme

const rules = {
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

export default [
  { rules },
]
