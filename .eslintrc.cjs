module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:boundaries/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort', 'boundaries'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    'boundaries/include': ['src/**/*'],
    'boundaries/elements': [
      { type: 'app', pattern: 'app' },
      { type: 'pages', pattern: 'pages/*', capture: ['page'] },
      { type: 'widgets', pattern: 'widgets/*', capture: ['widget'] },
      { type: 'features', pattern: 'features/*', capture: ['feature'] },
      { type: 'entities', pattern: 'entities/*', capture: ['entity'] },
      { type: 'shared', pattern: 'shared/*', capture: ['segment'] },
    ],
  },
  rules: {
    'prettier/prettier': 'warn',
    'simple-import-sort/exports': 'warn',
    'react-refresh/only-export-components': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'boundaries/entry-point': [
      2,
      {
        default: 'disallow',
        rules: [
          { target: [['shared', { segment: 'lib' }]], allow: '*/index.ts' },
          {
            target: [['shared', { segment: 'lib' }]],
            allow: '*.(ts|tsx)',
          },
          {
            target: [['shared', { segment: 'constants' }]],
            allow: 'index.ts',
          },
          {
            target: [['shared', { segment: 'ui' }]],
            allow: '**',
          },
          {
            target: ['shared'],
            allow: '**',
          },
          {
            target: ['app', 'pages', 'widgets', 'features', 'entities'],
            allow: 'index.(ts|tsx)',
          },
        ],
      },
    ],
    'boundaries/element-types': [
      2,
      {
        default: 'allow',
        message: '${file.type} is not allowed to import (${dependency.type})',
        rules: [
          {
            from: ['shared'],
            disallow: ['app', 'pages', 'widgets', 'features', 'entities'],
            message:
              'Shared module is not import upper layers (${dependency.type})',
          },
          {
            from: ['entities'],
            disallow: ['app', 'pages', 'widgets', 'features'],
            message:
              'Entity module is not import upper layers (${dependency.type})',
          },
          {
            from: ['entities'],
            message: 'Entity must not import other entity',
            disallow: [
              [
                'entities',
                {
                  entity: '!${entity}',
                },
              ],
            ],
          },
          {
            from: ['features'],
            message:
              'Feature module is not import upper layers (${dependency.type})',
            disallow: ['app', 'pages', 'widgets'],
          },
          {
            from: ['features'],
            message: 'Feature must not import other Feature',
            disallow: [
              [
                'features',
                {
                  feature: '!${feature}',
                },
              ],
            ],
          },
          {
            from: ['widgets'],
            message:
              'Widget module is not import upper layers (${dependency.type})',
            disallow: ['app', 'pages'],
          },
          {
            from: ['widgets'],
            message: 'Widget must not import other Widget',
            disallow: [
              [
                'widgets',
                {
                  widget: '!${widget}',
                },
              ],
            ],
          },
          {
            from: ['pages'],
            message:
              'Page module is not import upper layers (${dependency.type})',
            disallow: ['app'],
          },
          {
            from: ['pages'],
            message: 'Page must not import other Page',
            disallow: [
              [
                'pages',
                {
                  page: '!${page}',
                },
              ],
            ],
          },
        ],
      },
    ],
  },

  overrides: [
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|components)(/.*|$)'],

              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Side effect imports.
              ['^\\u0000'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
};
