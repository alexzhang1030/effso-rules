function main(pkg: Record<string, any>) {
  return {
    ...pkg,
    scripts: {
      ...pkg.scripts,
      lint: "eslint .",
      prepare: "simple-git-hooks",
    },
    "simple-git-hooks": {
      "pre-commit": "pnpm exec lint-staged",
    },
    "lint-staged": {
      "*.{js,ts,json,md,yaml,yml}": ["eslint --fix"],
    },
  };
}
