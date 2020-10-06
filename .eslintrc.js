module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  plugins: [
    "import",
    "jsx-a11y",
    "react",
    "react-hooks",
    "prettier"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "warn"
  },
};
