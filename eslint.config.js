import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    files: ["**/*.ts", "**/*.js", "**/*.tsx", "**/*.jsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // A single asterisk (`*`) is not enough to ignore a directory and its contents.
    // Use `**` for all subdirectories and files.
    ignores: [
      // Ignore the entire `dist` directory
      "dist/**",
      // Ignore the `test` directory and all its contents
      "test/**",
      "node_modules/**",
      ".next/**",
      "next.config.js",
      "eslint.config.js",
      "next-env.d.ts",
    ],
  },
  // Optional: Add custom rules or overrides here
  {
    rules: {
      // Example: Disallow non-null assertions if desired
      // Overrides some @typescript-eslint rules
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/consistent-indexed-object-style": [
        "error",
        "index-signature",
      ],

      // Enforce consistent use of type imports and exports
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-exports": "error",

      // Disallow unused variables, including those named with an underscore
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // Prevent non-null assertions (!), a sign of a potential type issue
      "@typescript-eslint/no-non-null-assertion": "error",

      // Prevent redundant type definitions
      "@typescript-eslint/no-redundant-type-constituents": "error",

      // Disable JavaScript-specific rules that conflict with or are better handled by TypeScript
      "no-unused-vars": "off", // Handled by @typescript-eslint/no-unused-vars
      "no-redeclare": "off", // Handled by @typescript-eslint/no-redeclare
    },
  }
);
