function main(
  path: string,
  helpers: {
    read: (path: string) => string;
    write: (path: string, content: string) => void;
  }
) {
  const target = `${path}/vitest.config.ts`;
  const content = helpers.read(target);
  if (!content) {
    helpers.write(
      target,
      `
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['src/*'],
    globals: true,
  },
})`
    );
  }
}
