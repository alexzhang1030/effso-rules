function main(
  path: string,
  helpers: {
    read: (path: string) => string;
    write: (path: string, content: string) => void;
  }
) {
  const target = `${path}/tsup.config.ts`;
  const content = helpers.read(target);
  if (!content) {
    helpers.write(
      target,
      `import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  entry: ['src/index.ts'],
  target: 'esnext',
  format: ['esm', 'cjs'],
  dts: true,
})
`
    );
  }
}
