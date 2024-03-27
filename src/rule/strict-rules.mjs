
export const strictRules = {
  '@typescript-eslint/prefer-ts-expect-error': 0,
  // https://typescript-eslint.io/rules/?=xrecommended-strict-xstylistic
  '@typescript-eslint/ban-ts-comment': [
    0,
    {
      'ts-expect-error': 'allow-with-description',
      minimumDescriptionLength: 3,
    },
  ],
  '@typescript-eslint/no-extraneous-class': 0,
  '@typescript-eslint/no-unnecessary-type-arguments': 0,
  '@typescript-eslint/no-useless-constructor': 2,
  '@typescript-eslint/prefer-literal-enum-member': 0,
  '@typescript-eslint/prefer-optional-chain': 1,
  '@typescript-eslint/prefer-readonly': 1,
  '@typescript-eslint/require-await': 0,
  '@typescript-eslint/switch-exhaustiveness-check': 1,
  '@typescript-eslint/restrict-template-expressions': [2,
    {
      allowBoolean: true,
      allowNumber: true,
    },
  ],
  '@typescript-eslint/use-unknown-in-catch-callback-variable': 0,

  // https://eslint.org/docs/rules/#stylistic-issues
  'consistent-this': 1,
  'id-length': [
    2, {
      min: 2,
      exceptions: [
        '$',
        '_',
        'i',
        'k',
        't',
        'v',
        'x',
      ],
    },
  ],
  'max-depth': [2, { max: 6 }],
  'max-len': [
    2,
    {
      code: 180,
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],
  'max-lines': [2, { max: 1000, skipBlankLines: true, skipComments: true }],
  'max-lines-per-function': [
    2, {
      max: 100, skipBlankLines: true, skipComments: true, IIFEs: true,
    },
  ],
  'no-bitwise': 2,
  'no-object-constructor': 2,
  'no-plusplus': 2,
  'no-unneeded-ternary': 1,
  'prefer-arrow-callback': 1,
  'prefer-destructuring': [
    1,
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    },
  ],
}


