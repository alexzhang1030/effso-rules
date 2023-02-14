function main(pkg: Record<string, any>) {
  return {
    ...pkg,
    scripts: {
      ...pkg,
      "prepublishOnly": "pnpm run build",
      "release": "bumpp --commit \"chore: release v%s\" --push --tag && pnpm publish"
    }
  }
}
