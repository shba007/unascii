---
'unascii': patch
---

build(deps): update dependencies and devDependencies

chore(package.json): add author, license and repository fields and update pnpm version

refactor(cli.ts): update import path for asciiPrint and OutputType to use the new index file

refactor(index.ts): move print logic to index.ts and export OutputType from types

chore(deploy.yml): add fetch-depth: 0 to checkout action

test(index.test.ts): update imports and remove unused it function
