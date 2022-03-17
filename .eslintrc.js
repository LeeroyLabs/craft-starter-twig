module.exports = {
    root: true,

    env: {
        node: true,
    },

    rules: {
        curly: 'error',
        'no-extra-semi': 'error',
        'no-else-return': ['error', { allowElseIf: false }],
        'no-nested-ternary': 'error',
        'no-undef-init': 'error',
        'no-unneeded-ternary': 'error',
        'no-console':
            process.env.NODE_ENV === 'production'
                ? ['error', { allow: ['warn', 'error'] }]
                : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },

    overrides: [
        {
            files: ['**/__tests__/*.js?(x)', '**/tests/unit/**/*.spec.js?(x)'],
            env: {
                jest: true,
            },
        },
    ],

    extends: ['plugin:vue/vue3-essential', 'prettier'],
};
