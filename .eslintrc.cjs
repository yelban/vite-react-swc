module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended', // 1. eslint-plugin-import
        'plugin:prettier/recommended', // 3. eslint-plugin-prettier
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config-all.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: {
        react: { version: '18.2' },
        'import/resolver': {
            alias: {
                map: [
                    ['', './public'], // prevent eslint from complaining about absolute imports
                ],
                extensions: ['.js', '.jsx'],
            },
        },
    },
    plugins: [
        'react-refresh',
        'simple-import-sort', // 2. eslint-plugin-simple-import-sort
    ],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'import/first': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-duplicates': 'warn',
    },
};
