# unascii

## v0.4.8

[compare changes](https://github.com/shba007/unascii/compare/v0.4.1...v0.4.8)

### 🚀 Enhancements

- Migrated to bun from node ([361fdea](https://github.com/shba007/unascii/commit/361fdea))
- Update npmrc path and clean up after publishing ([d35df48](https://github.com/shba007/unascii/commit/d35df48))
- **core:** Add semantic‑versioning guard for new API ([1109517](https://github.com/shba007/unascii/commit/1109517))

### 🩹 Fixes

- Update image paths in tests and improve README formatting ([77dcdfd](https://github.com/shba007/unascii/commit/77dcdfd))
- Update GitHub token to use GH_PAT for npm registry access ([13c3584](https://github.com/shba007/unascii/commit/13c3584))
- Add npmrc configuration for registry authentication ([5d92231](https://github.com/shba007/unascii/commit/5d92231))

### 💅 Refactors

- Runtime changed form node to bun ([5e4a964](https://github.com/shba007/unascii/commit/5e4a964))
- Update deployment workflow and package scripts for Bun compatibility ([65c573d](https://github.com/shba007/unascii/commit/65c573d))

### ❤️ Contributors

- Shba007 (@shba007)

## v0.4.1

[compare changes](https://github.com/shba007/unascii/compare/v0.4.0...v0.4.1)

### 🩹 Fixes

- Update package dependencies and package manager version ([2c2da06](https://github.com/shba007/unascii/commit/2c2da06))
- Update consola import to named import ([1d99b3f](https://github.com/shba007/unascii/commit/1d99b3f))

### 💅 Refactors

- **ci:** Ci/cd workflow refactored and update deps ([b2a4dd6](https://github.com/shba007/unascii/commit/b2a4dd6))

### ❤️ Contributors

- Shba007 ([@shba007](https://github.com/shba007))
- Shirsendu Bairagi ([@shba007](https://github.com/shba007))

## 0.4.0

### Minor Changes

- 5801f9d: feat: add initial setup for UnAscii Playground with Docker support and UI components

## 0.3.7

### Patch Changes

- d654ab5: fix: replace process.env with std-env for environment variable access

## 0.3.6

### Patch Changes

- bc8f837: chore: set up Husky hooks, add commitlint, and configure Prettier and TypeScript for Svelte project

## 0.3.5

### Patch Changes

- d22da5a: refactor: remove unused configuration files and update dependencies

## 0.3.4

### Patch Changes

- 65892ed: fix: change postinstall script to prepare for husky

## 0.3.3

### Patch Changes

- 4a3e3d5: chore: update Node.js version and dependencies, adjust workflows, and refine ignore files

## 0.3.2

### Patch Changes

- f348d97: chore: add .env.example and update ignore patterns for environment files, updated packages
- 054d526: chore: add husky and commitlint for improved commit messages and code quality
  chore: update prettierignore to ignore more files and folders
  chore: remove unnecessary eslint rules and overrides
  chore: add gitleaks pre-commit hook to detect secrets
  chore: add opencommit for easier commit message generation
  chore: add utils functions for rgbToHex and isURL
  chore: update package.json scripts and add prepare script
  refactor(index): remove redundant null check for canvas context
  style: fix import paths in types/index.ts

## 0.3.1

### Patch Changes

- d4c1ee3: fix(package.json): update package name to scoped package name
- 0403767: build(deps): update dependencies and devDependencies

  chore(package.json): add author, license and repository fields and update pnpm version

  refactor(cli.ts): update import path for asciiPrint and OutputType to use the new index file

  refactor(index.ts): move print logic to index.ts and export OutputType from types

  chore(deploy.yml): add fetch-depth: 0 to checkout action

  test(index.test.ts): update imports and remove unused it function

## 0.3.0

### Minor Changes

- 0efe2f0: chore: update project settings and dependencies

  Updates editor configuration, GitHub workflow, environment type definitions, and project dependencies to improve code style, CI/CD process, and development experience. The changes also include updates to Volta configuration and package manager settings. Additionally, the playground CLI script import path is corrected, and the web playground package configuration is enhanced.

- 73243b3: feat: demo website init

## v0.2.3

[compare changes](https://github.com/shba007/unascii/compare/v0.2.2...v0.2.3)

## 0.2.2

### Patch Changes

- 8c7f734: feat: widthSkew added to the cli

## 0.2.1

### Patch Changes

- ff8523c: fix: printing to file fixed

## 0.2.0

### Minor Changes

- 8065761: refactor: asciiPrint path argument made positional, subcommend moved, test added, docs updated

## 0.1.1

### Patch Changes

- 070f85d: fix: shebang line modified

## 0.1.0

### Minor Changes

- 84aa262: feat: cli, pkg released
