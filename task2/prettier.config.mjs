/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "es5",
    printWidth: 120,
    bracketSpacing: true,
    arrowParens: "always",
    endOfLine: "lf",
    plugins: ["prettier-plugin-tailwindcss"]
};

export default config;
