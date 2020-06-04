module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
      },
    },
  ],
  rules: {
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true,
          },
        },
      },
    ],
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'block-spacing': [
      'error',
      'always',
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [
      'error',
      'last',
    ],
    'computed-property-spacing': [
      'error',
      'never',
    ],
    'func-call-spacing': [
      'error',
      'never',
    ],
    'func-names': [
      'warn',
      'as-needed',
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: {
          var: 2,
          let: 2,
          const: 3,
        },
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 'first',
        },
        FunctionExpression: {
          parameters: 'first',
        },
        CallExpression: {
          arguments: 'first',
        },
        ArrayExpression: 'first',
        ObjectExpression: 'first',
      },
    ],
    'key-spacing': [
      'error',
      {
        singleLine: {
          beforeColon: false,
          afterColon: true,
          mode: 'strict',
        },
        multiLine: {
          beforeColon: false,
          afterColon: true,
        },
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],
    'lines-around-directive': [
      'error',
      {
        before: 'never',
        after: 'always',
      },
    ],
    'new-parens': 'error',
    'newline-after-var': [
      'error',
      'always',
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
      },
    ],
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: false,
      },
    ],
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],
    'one-var-declaration-per-line': [
      'error',
      'always',
    ],
    'one-var': [
      'error',
      'never',
    ],
    'operator-linebreak': [
      'error',
      'before',
    ],
    'quote-props': [
      'error',
      'as-needed',
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: [
      'error',
      'always',
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: [
          '-',
          '+',
          '>',
        ],
      },
    ],
    'block-scoped-var': 'error',
    curly: [
      'error',
      'all',
    ],
    'dot-location': [
      'error',
      'property',
    ],
    'dot-notation': [
      'error',
      {
        allowPattern: '^[a-z]+(_[a-z]+)+$',
        allowKeywords: true,
      },
    ],
    eqeqeq: [
      'error',
      'smart',
    ],
    'guard-for-in': 'error',
    'no-caller': 'error',
    'no-empty-function': ['error', { allow: ['constructors']}],
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-multi-spaces': 'error',
    'no-new': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-with': 'error',
    radix: 'error',
    'require-await': 'error',
    'wrap-iife': [
      'error',
      'any',
    ],
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': 'error',
    'callback-return': [
      'error',
      [
        'callback',
        'cb',
        'next',
        'done',
      ],
    ],
    'global-require': 'error',
    'handle-callback-err': [
      'error',
      '^.*(e|E)rr',
    ],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'arrow-spacing': 'error',
    'no-var': 'error',
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true,
      },
    ],
    'rest-spread-spacing': [
      'error',
      'never',
    ],
    'template-curly-spacing': 'error',
    'yield-star-spacing': [
      'error',
      'before',
    ],
    'no-console': [
      'error',
    ],
  },
};