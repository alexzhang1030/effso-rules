function main(path: string, helpers: {
  read: (path: string) => string
  write: (path: string, content: string) => void
  merge: (target: object, source: object) => object
}) {
  const target = `${path}/.vscode/settings.json`
  const content = helpers.read(target)

  const settings = {
   "prettier.enable": false,
   "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
   },
   "editor.formatOnSave": false
  }

  if (!content) {
    helpers.write(target, JSON.stringify(settings, null, 2))
  } else {
    helpers.write(target, JSON.stringify(merge(settings, JSON.parse(content))), null, 2)
  }
}
