module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "type",
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "**/components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "**/hooks/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "**/constants/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "**/types/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "**/utils/**",
            group: "internal",
            position: "after",
          },
        ],
        alphabetize: {
          order: "desc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
};
