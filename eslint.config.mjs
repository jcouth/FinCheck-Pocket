import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import tailwindcss from 'eslint-plugin-tailwindcss';
import testingLibrary from 'eslint-plugin-testing-library';
import tseslint from 'typescript-eslint';

const ignores = [
  '__mocks__',
  '.bundle',
  '.github',
  '.husky',
  '.vscode',
  'android',
  'coverage',
  'ios',
  'node_modules',
  'babel.config.js',
  'commitlint.config.mjs',
  'eslint.config.mjs',
  'index.js',
  'jest.config.mjs',
  'jest.setup.js',
  'metro.config.js',
  'prettier.config.mjs',
  'tailwind.config.js',
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
  tailwindcss.configs['flat/recommended'],
  storybook.configs['flat/recommended'],
  testingLibrary.configs['flat/react'],
  eslintPluginPrettierRecommended,
  { ignores },
);
