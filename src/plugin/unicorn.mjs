// https://github.com/sindresorhus/eslint-plugin-unicorn#readme

const rules = {
  'unicorn/consistent-assert': 0,
  'unicorn/consistent-date-clone': 1,
  'unicorn/consistent-existence-index-check': [1],
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
  'unicorn/no-accessor-recursion': 2,
  'unicorn/no-instanceof-builtins': 1,
  'unicorn/no-new-buffer': [2],
  'unicorn/no-thenable': [2],
  'unicorn/no-useless-spread': [1],
  'unicorn/prefer-array-flat': [1],
  'unicorn/prefer-array-some': [1],
  'unicorn/prefer-at': [1],
  'unicorn/prefer-code-point': [1],
  'unicorn/prefer-date-now': [2],
  'unicorn/prefer-global-this': [1],
  'unicorn/prefer-json-parse-buffer': [1],
  'unicorn/prefer-keyboard-event-key': [1],
  'unicorn/prefer-math-min-max': [1],
  'unicorn/prefer-module': [1],
  'unicorn/prefer-math-trunc': [1],
  'unicorn/prefer-modern-math-apis': [2],
  'unicorn/prefer-node-protocol': [1],
  'unicorn/prefer-reflect-apply': [1],
  'unicorn/prefer-regexp-test': [1],
  'unicorn/prefer-string-raw': [2],
  'unicorn/prefer-string-slice': [2],
  'unicorn/prefer-type-error': [1],
  'unicorn/text-encoding-identifier-case': [1],
  'unicorn/throw-new-error': [1],
}

export const unicornPluginRules = [
  { rules },
]
