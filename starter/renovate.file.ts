function main(
  path: string,
  helpers: {
    read: (path: string) => string;
    write: (path: string, content: string) => void;
  },
) {
  const target = `${path}/.github/renovate.json`;
  const content = helpers.read(target);
  if (!content) {
    helpers.write(
      target,
      JSON.stringify(
        {
          extends: ["github>alexzhang-dev/renovate-config"],
        },
        null,
        2,
      ),
    );
  }
}
