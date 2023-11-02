const json = {
  compilerOptions: {
    target: "ESNext",
    lib: ["ESNext"],
    baseUrl: ".",
    module: "ESNext",
    moduleResolution: "node",
    paths: {
      "@/*": ["src/*"],
    },
    resolveJsonModule: true,
    types: ["vitest/globals"],
    allowJs: true,
    strict: true,
    strictNullChecks: true,
    noImplicitAny: true,
    noUnusedLocals: true,
    esModuleInterop: true,
    skipDefaultLibCheck: true,
    skipLibCheck: true,
  },
  exclude: ["dist", "node_modules"],
};

function main(
  path: string,
  helpers: {
    read: (path: string) => string;
    write: (path: string, content: string) => void;
  },
) {
  const target = `${path}/tsconfig.json`;
  const content = helpers.read(target);
  if (!content) {
    helpers.write(target, JSON.stringify(json, null, 2));
  }
}
