function main(
  path: string,
  helpers: {
    read: (path: string) => string;
    write: (path: string, content: string) => void;
    merge: (target: object, source: object) => object;
  },
) {
  const target = `${path}/.vscode/settings.json`;
  const content = helpers.read(target);

  const settings = {
    // Enable the ESlint flat config support
    "eslint.experimental.useFlatConfig": true,

    // Disable the default formatter, use eslint instead
    "prettier.enable": false,
    "editor.formatOnSave": false,

    // Auto fix
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
      "source.organizeImports": "never",
    },

    // Silent the stylistic rules in you IDE, but still auto fix them
    "eslint.rules.customizations": [
      { rule: "style/*", severity: "off" },
      { rule: "*-indent", severity: "off" },
      { rule: "*-spacing", severity: "off" },
      { rule: "*-spaces", severity: "off" },
      { rule: "*-order", severity: "off" },
      { rule: "*-dangle", severity: "off" },
      { rule: "*-newline", severity: "off" },
      { rule: "*quotes", severity: "off" },
      { rule: "*semi", severity: "off" },
    ],

    // Enable eslint for all supported languages
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact",
      "vue",
      "html",
      "markdown",
      "json",
      "jsonc",
      "yaml",
    ],
  };

  if (!content || !content.trim().length) {
    helpers.write(target, JSON.stringify(settings, null, 2));
  } else {
    const fileContent = helpers.merge(settings, JSON.parse(content));
    helpers.write(target, JSON.stringify(fileContent, null, 2));
  }
}
