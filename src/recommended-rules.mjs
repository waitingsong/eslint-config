
// https://eslint.style/packages/default
export const stylesRules = {
  '@stylistic/func-call-spacing': ['error', 'never'],
  '@stylistic/function-paren-newline': 1,
  '@stylistic/implicit-arrow-linebreak': 2,
  '@stylistic/linebreak-style': ['error', 'unix'],
  '@stylistic/member-delimiter-style': [
    2,
    {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
      overrides: {
        interface: {
          multiline: {
            delimiter: 'none',
            requireLast: false,
          },
        },
      },
    },
  ],
  '@stylistic/no-extra-parens': ['error', 'all'],
  '@stylistic/no-multiple-empty-lines': ['error', { max: 4, maxBOF: 1, maxEOF: 2 }],
  '@stylistic/no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: true }],
  '@stylistic/object-curly-newline': [
    'error',
    {
      ObjectExpression: { multiline: true, minProperties: 6, consistent: true },
      ObjectPattern: { multiline: true, minProperties: 6, consistent: true },
      ImportDeclaration: { multiline: true, minProperties: 8 },
      ExportDeclaration: { multiline: true, minProperties: 2 },
    },
  ],
  '@stylistic/padded-blocks': [
    1,
    {
      classes: 'always',
    },
  ],
  '@stylistic/quote-props': [1, 'as-needed'],
  '@stylistic/semi-style': ['error', 'last'],
  '@stylistic/space-unary-ops': [
    2,
    {
      words: true,
      nonwords: false,
      overrides: {
        '!': true,
        '!!': true,
      },
    },
  ],
}


export const lintRules = {
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
  // https://typescript-eslint.io/rules/array-type
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
    },
  ],
  'default-param-last': 0,
  '@typescript-eslint/default-param-last': 2,
  '@typescript-eslint/explicit-function-return-type': 0,
  'no-shadow': 0,
  '@typescript-eslint/no-shadow': 2,
  '@typescript-eslint/no-unnecessary-qualifier': 2,
  'no-use-before-define': 0,
  '@typescript-eslint/no-use-before-define': ['error', { functions: false, typedefs: false }],

  // https://eslint.org/docs/rules/#best-practices
  curly: 2,
  eqeqeq: 2,
  'no-eval': 2,
  'no-throw-literal': 'off',
  '@typescript-eslint/no-throw-literal': 'error',
  'no-unmodified-loop-condition': 2,
  'no-lonely-if': 1,

  '@typescript-eslint/no-require-imports': 2,
  '@typescript-eslint/prefer-includes': 1,
  '@typescript-eslint/require-array-sort-compare': 2,
  'no-return-await': 0,
  '@typescript-eslint/return-await': 2,

  // https://eslint.org/docs/rules/
  'no-await-in-loop': 1,
  'no-console': [2, { allow: ['warn', 'error', 'info'] }],
  'no-loop-func': 2,
  'no-multi-assign': 2,
  'no-multi-str': 2,
  'no-negated-condition': 1,
  'no-new-wrappers': 2,
  'no-object-constructor': 2,
  'no-octal-escape': 2,
  'no-param-reassign': 2,
  'no-return-assign': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-template-curly-in-string': 1,
  'no-undef-init': 1,
  'prefer-const': 1,
  'prefer-rest-params': 1,
  'prefer-spread': 1,
  radix: 2,
  'require-unicode-regexp': 1,
}

