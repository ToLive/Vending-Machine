module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'prettier',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.js'],
    parser: '@typescript-eslint/parser',  
    parserOptions: {
      project: './tsconfig.eslint.json',
    },
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
  