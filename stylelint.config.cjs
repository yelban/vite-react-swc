module.exports = {
    extends: [
        //
        'stylelint-config-standard',
        // 'stylelint-config-prettier',
        'stylelint-prettier/recommended', // Enables the stylelint-plugin-prettier plugin, Enables the prettier/prettier rule, Extends the stylelint-config-prettier configuration
        // "stylelint-config-html/html",
        // 'stylelint-config-standard-scss', // disabled to prevent CssSyntaxError
        // 'stylelint-config-prettier-scss',
        // "stylelint-config-idiomatic-order",
        'stylelint-config-clean-order',
    ],
    plugins: [
        'stylelint-order', //
        // 'stylelint-prettier',
    ],
    rules: {
        // 'color-hex-length': 'long',
        // 'prettier/prettier': true,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind'],
            },
        ],
        'no-descending-specificity': null,
    },
    overrides: [
        {
            files: ['*.css', '**/*.css', '*.scss', '**/*.scss', '*.less', '**/*.less'],
            rules: {
                // 'color-hex-alpha': 'always',
            },
        },
        {
            files: ['*.stylus', '*.styl', '**/*.stylus', '**/*.styl'],
            extends: [
                'stylelint-stylus/standard',
                // 'stylelint-config-idiomatic-order',
                'stylelint-config-clean-order',
            ],
            plugins: ['stylelint-stylus', 'stylelint-order'],
            rules: {
                // 'stylus/color-hex-case': 'upper',
                'stylus/semicolon': 'never',
            },
        },
    ],
};
