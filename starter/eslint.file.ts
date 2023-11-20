const text = `import antfu from '@antfu/eslint-config'

export default antfu()
`;

function main(
  path: string,
  helpers: {
    read: (path: string) => string;
    write: (path: string, content: string) => void;
  },
) {
  const target = `${path}/eslint.config.js`;
  const content = helpers.read(target);
  if (!content) {
    helpers.write(target, text);
  }
}
