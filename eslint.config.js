/**
 * Name: eslint.config.js
 * Description: Configuration for ESLint.
 */

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    stylistic.configs.customize({
        indent: 4,
        quotes: "double",
        semi: true,
    }),
    {
        rules: {
            "no-case-declarations": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    varsIgnorePattern: "^_",
                    argsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/no-empty-object-type": "warn",
            "@typescript-eslint/no-floating-promises": "off",
            "@typescript-eslint/no-misused-promises": "off",
            "@typescript-eslint/no-unnecessary-condition": "warn",
            "@typescript-eslint/no-unsafe-argument": "off",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "@typescript-eslint/no-unsafe-return": "off",
            "@typescript-eslint/prefer-find": "warn",
            "@typescript-eslint/require-await": "warn",
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/triple-slash-reference": "off",
            "@stylistic/arrow-parens": "warn",
            "@stylistic/brace-style": "warn",
            "@stylistic/comma-dangle": "warn",
            "@stylistic/comma-spacing": "warn",
            "@stylistic/eol-last": "warn",
            "@stylistic/indent-binary-ops": "warn",
            "@stylistic/indent": "off",
            "@stylistic/jsx-closing-bracket-location": "off",
            "@stylistic/jsx-closing-tag-location": "warn",
            "@stylistic/jsx-curly-newline": "warn",
            "@stylistic/jsx-first-prop-new-line": "off",
            "@stylistic/jsx-indent-props": "warn",
            "@stylistic/jsx-indent": "off",
            "@stylistic/jsx-max-props-per-line": "warn",
            "@stylistic/jsx-one-expression-per-line": "warn",
            "@stylistic/jsx-wrap-multilines": "warn",
            "@stylistic/key-spacing": "warn",
            "@stylistic/keyword-spacing": "warn",
            "@stylistic/max-statements-per-line": "warn",
            "@stylistic/multiline-ternary": "off",
            "@stylistic/no-multi-spaces": "warn",
            "@stylistic/no-multiple-empty-lines": "warn",
            "@stylistic/no-trailing-spaces": "warn",
            "@stylistic/object-curly-spacing": "warn",
            "@stylistic/operator-linebreak": "warn",
            "@stylistic/padded-blocks": "warn",
            "@stylistic/quote-props": "warn",
            "@stylistic/quotes": "warn",
            "@stylistic/space-in-parens": "warn",
            "@stylistic/type-annotation-spacing": "warn",
        },
    },
);
