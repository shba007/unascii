# unascii

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
