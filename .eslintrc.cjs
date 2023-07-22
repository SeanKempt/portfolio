module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'wesbos/typescript',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'off',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [1, { ignoreRestSiblings: true }],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'warn',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // this is covered by the typescript compiler, so we don't need it
    'no-undef': 'off',
    'no-shadow': 'off', // TS does it
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: [
        'vite.config.ts',
        '.eslintrc.cjs',
        'tailwind.config.js',
        'postcss.config.js',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.node.json',
      },
    },
  ],
};
