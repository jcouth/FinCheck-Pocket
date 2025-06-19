import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

const ignores = [
  '.bundle',
  '.vscode',
  'node_modules',
  'android',
  'ios',
  'coverage',
  'babel.config.js',
  'metro.config.js',
  'jest.config.js',
  'eslint.config.mjs',
  'index.js',
];

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    settings: { react: { version: 'detect' } },
    ...react.configs.flat.recommended,
    ...react.configs.flat['jsx-runtime'],
  },
  reactHooks.configs['recommended-latest'],
  eslintPluginPrettierRecommended,
  { ignores },
);
