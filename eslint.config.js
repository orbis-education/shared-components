import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  // Global ignores
  {
    ignores: ["dist/**", "node_modules/**", "resources/**"]
  },
  // Main configuration
  {
    files: ["lib/**/*.{ts,tsx}", "src/**/*.{ts,tsx,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        projectService: true,
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      // Use recommended rules from plugins
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommendedTypeChecked[1].rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      // Disable rules that conflict with Prettier
      ...prettierConfig.rules,

      // Custom rules - must come AFTER spreads to override
      // Override typescript-eslint's no-unused-vars to allow underscore-prefixed params
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_"
        }
      ],
      "no-unused-vars": "off", // Disable eslint's version in favor of typescript-eslint
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      // Prettier integration
      "prettier/prettier": "error",
      // Comma rules to align with Prettier config (trailingComma: "none")
      "comma-dangle": ["error", "never"],
      // React-specific rules
      "react/prop-types": "off", // Not needed with TypeScript
      "react/display-name": "warn",
      "react-hooks/set-state-in-effect": "off"
    }
  }
];
