import js from '@eslint/js';
import angular from 'angular-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['.angular/'],
    },
    eslintConfigPrettier,
    {
        files: ['**/*.ts'],
        extends: [js.configs.recommended, tseslint.configs.strict, angular.configs.tsRecommended],
        processor: angular.processInlineTemplates,
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                },
            ],
            semi: ['error', 'always'],

            // NOTE: For "tslint:disable" used in the generated api manager
            '@typescript-eslint/ban-tslint-comment': 'off',

            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],

            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                    accessibility: 'explicit',
                    overrides: {
                        constructors: 'off',
                    },
                },
            ],

            '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],

            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],

            '@typescript-eslint/strict-boolean-expressions': [
                'error',
                {
                    allowAny: false,
                    allowNullableBoolean: true, // TODO: Maybe change to false
                    allowNullableEnum: false,
                    allowNullableNumber: false,
                    allowNullableObject: true,
                    allowNullableString: true,
                    allowNumber: false,
                    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
                    allowString: true,
                },
            ],
        },
    },
    {
        files: ['**/*.html'],
        extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
        rules: {
            '@angular-eslint/template/prefer-self-closing-tags': 'error',
            '@angular-eslint/template/eqeqeq': [
                'error',
                {
                    allowNullOrUndefined: true,
                },
            ],
        },
    },
);
