import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import ts from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Next.js official rules
const compat = new FlatCompat({ baseDirectory: __dirname });
const nextRules = compat.extends('next/core-web-vitals', 'next/typescript');

export default [
  // 1️⃣ Official JS recommended rules
  js.configs.recommended,

  // 2️⃣ React + TypeScript rules
  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    // Exclude node_modules, .next, dist
    ignores: ['node_modules/**', '.next/**', 'dist/**'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': ts,
    },

    rules: {
      // React rules
      'react/react-in-jsx-scope': 'off',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // Code style rules
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'always-multiline']
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  ...nextRules,
];
