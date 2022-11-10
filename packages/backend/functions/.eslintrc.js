module.exports = {
  extends: "../../../.eslintrc",
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
};
