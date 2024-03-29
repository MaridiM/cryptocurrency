module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './postcss.config.ts'],
        tsconfigRootDir: __dirname,
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'import',
        'react-hooks',
        'i18next',
        'prettier',
        'unused-imports',
    ],
    rules: {
        // General rules
        eqeqeq: 'warn',
        'no-var': 'error',
        'no-eval': 'error',
        'prefer-const': 'warn',
        'no-undef-init': 'warn',
        'no-duplicate-imports': 'warn',

        // React rules
        'react/react-in-jsx-scope': 'off',
        'no-dupe-args': 'off',
        'no-empty-pattern': 'warn',
        'react/prop-types': 'error',
        'react/jsx-key': ['warn', { checkFragmentShorthand: false }],
        'react/no-unescaped-entities': ['warn', { forbid: ['>', '}', "'"] }],
        'react/no-deprecated': 'warn',
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'react/self-closing-comp': ['error', { component: false, html: true }],
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',

        // TypeScript rules
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/await-thenable': 'warn',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'warn',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-useless-empty-export': 'warn',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-redundant-type-constituents': 'off',

        // Additional rules
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'no-shadow': 'off',
        'no-unused-expressions': 'off',
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'computed-property-spacing': ['error', 'never'],
        'arrow-body-style': ['error', 'as-needed'],

        // Import rules
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '**/**',
                        group: 'parent',
                        position: 'before',
                    },
                ],
                alphabetize: { order: 'asc' },
            },
        ],
        'i18next/no-literal-string': 2,
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    // ignorePatterns: ['*.ts', '*.js'],
    root: true,
    globals: {
        __ENV__: true,
        __DEV__: true,
        __PROD__: true,
        __TEST__: true,
        __VERSION__: true,
        __BUILD_DATE__: true,
        __PLATFORM__: true,
    },
};
