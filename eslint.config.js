import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default defineConfig([
  { ignores: ["node_modules/**", "dist/**", "scripts/**", "eslint.config.js"] },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "prefer-const": "error",
    },
  },
  prettier,
]);
