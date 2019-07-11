module.exports = {
  extends: [
    "./base.js",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "sort-imports": 0,
    "require-atomic-updates": 0,

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    "@typescript-eslint/array-type": [2, "array-simple"],
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/consistent-type-definitions": [2, "interface"],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": [
      2,
      {
        "accessibility": "explicit",
        "overrides": {
          "accessors": "explicit",
          "constructors": "no-public",
          "methods": "explicit",
          "properties": "off",
          "parameterProperties": "explicit"
        }
      }
    ],
    "func-call-spacing": 0,
    "@typescript-eslint/func-call-spacing": [1, "never"],
    "indent": 0,
    "@typescript-eslint/indent": [2, 2,  { "SwitchCase": 1 } ],
    "@typescript-eslint/member-delimiter-style": [
      2,
      {
        "multiline": {
          "delimiter": "comma",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false
        },
        "overrides": {
          "interface": {
            "multiline": {
              "delimiter": "none",
              "requireLast": false
            }
          }
        }
      }
    ],
    "@typescript-eslint/no-angle-bracket-type-assertion": 0,
    "no-empty-function": 0,
    "@typescript-eslint/no-empty-function": 1,
    "@typescript-eslint/no-explicit-any": [0],
    "no-extra-parens": 0,
    "@typescript-eslint/no-extra-parens": 2,
    "@typescript-eslint/no-object-literal-type-assertion": [0, { allowAsParameter: true }],
    "@typescript-eslint/no-parameter-properties": 0,
    "@typescript-eslint/no-unnecessary-qualifier": 2,
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": [2, { "functions": false, "typedefs": false }],
    "semi": 0,
    "@typescript-eslint/semi": [1, "never", { beforeStatementContinuationChars: "always" }],

    // https://eslint.org/docs/rules/#best-practices
    "curly": 2,
    "dot-notation": 1,
    "eqeqeq": 2,
    "no-eval": 2,
    "no-multi-spaces": 1,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,

    // https://eslint.org/docs/rules/#variables
    "no-shadow": 2,

    // https://eslint.org/docs/rules/#stylistic-issues
    "array-bracket-newline": [1, { "multiline": true }],
    "array-bracket-spacing": [1, "never", { "singleValue": false, "objectsInArrays": true, "arraysInArrays": true }],
    "block-spacing": 1,
    "brace-style": [1, "stroustrup", { "allowSingleLine": true }],
    "comma-dangle": [1, {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline"
    }],
    "comma-spacing": 1,
    "comma-style": 1,
    "computed-property-spacing": 1,
    "eol-last": [1, "always"],
    "function-paren-newline": [1, "multiline-arguments"],
    "implicit-arrow-linebreak": 2,
    "key-spacing": 1,
    "keyword-spacing": 1,
    "linebreak-style": [1, "unix"],
    "lines-between-class-members": [1, "always"],
    "max-params": [2, {"max": 4}],
    "new-parens": [1],
    "newline-per-chained-call": [1, {"ignoreChainWithDepth": 6}],
    "no-lonely-if": 1,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [1, {"max": 4, "maxBOF": 1, "maxEOF": 1}],
    "no-trailing-spaces": [2, {"skipBlankLines": false, "ignoreComments": true}],
    "no-whitespace-before-property": 1,
    "object-curly-newline": [1, 
      {
        "ObjectExpression": { "multiline": true, "minProperties": 4, "consistent": true },
        "ObjectPattern": { "multiline": true, "minProperties": 4, "consistent": true },
        "ImportDeclaration": { "multiline": true, "minProperties": 6 },
        "ExportDeclaration": { "multiline": true, "minProperties": 2 }
      }
    ],
    "object-curly-spacing": [1, "always"],
    "object-property-newline": [1, {"allowAllPropertiesOnSameLine": true}],
    "one-var": [1, "never"],
    "operator-linebreak": [1, "before"],
    "padded-blocks": [1, {"classes": "always"}],
    "quote-props": [1, "as-needed"],
    "quotes": [1, "single"],
    "semi-spacing": [1, {"before": false, "after": true}],
    "semi-style": [2, "last"],
    "space-before-blocks": [1, "always"],
    "space-before-function-paren": [1, {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "spaced-comment": [1, "always", 
      {
        "line": {
          "markers": ["/"],
          "exceptions": ["-", "+"]
        },
        "block": {
          "markers": ["!"],
          "exceptions": ["*"],
          "balanced": true
        }
      }
    ],
    "space-in-parens": [1, "never"],
    "space-infix-ops": [1],
    "space-unary-ops": [
      2,
      {
        "words": true,
        "nonwords": false,
        "overrides": {
          "!": true,
          "!!": true
        }
      }
    ],
    "template-curly-spacing": [1, "always"],
    "template-tag-spacing": [1, "never"],
    "unicode-bom": [2, "never"],

    // https://eslint.org/docs/rules/#ecmascript-6
    "arrow-body-style": [1, "as-needed", { "requireReturnForObjectLiteral": true }],
    "arrow-parens": [1, "as-needed"],
    "arrow-spacing": 1,
    "no-confusing-arrow": [1, {"allowParens": true}],
    "no-duplicate-imports": 2,
    "no-useless-computed-key": 1,
    "no-useless-rename": 1,
    "no-var": 2,
    "object-shorthand": [1, "always"],
  }
}
