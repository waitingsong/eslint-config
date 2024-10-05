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
  'unicorn/no-thenable': [2],
  'unicorn/no-useless-spread': [1],
  'unicorn/prefer-array-flat': [1],
  'unicorn/prefer-array-some': [1],
  'unicorn/prefer-at': [1],
  'unicorn/prefer-code-point': [1],
  'unicorn/prefer-date-now': [2],
  'unicorn/prefer-global-this': [1],
  'unicorn/prefer-json-parse-buffer': [1],
  'unicorn/prefer-modern-math-apis': [2],
  'unicorn/prefer-node-protocol': [1],
  'unicorn/prefer-string-raw': [2],
  'unicorn/prefer-string-slice': [2],
  'unicorn/prefer-type-error': [1],
  'unicorn/text-encoding-identifier-case': [1],
}

export const unicornPluginRules = [
  { rules },
]
