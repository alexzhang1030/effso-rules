function main(
  path: string,
  helpers: {
    read: (path: string) => string;
    write: (path: string, content: string) => void;
  }
) {
  const target = `${path}/uno.config.ts`;
  const content = helpers.read(target);
  if (!content) {
    helpers.write(
      target,
      `import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
`
    );
  }
}
