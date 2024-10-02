<p align="center">
  <img src="./public/logo.png" lt="Logo" width="192" />
<p>

# unascii

<!-- automd:badges color=blue -->

[![npm version](https://img.shields.io/npm/v/unascii?color=blue)](https://npmjs.com/package/unascii)
[![npm downloads](https://img.shields.io/npm/dm/unascii?color=blue)](https://npmjs.com/package/unascii)
[![License](https://img.shields.io/npm/l/unascii?color=blue)](https://github.com/shba007/unascii?tab=MIT-1-ov-file)

<!-- /automd -->

> Print any image in ascii anywhere (browser/cli)

## Usage (CLI)

Globally run unascii with `npx`:

```sh
npx unascii@latest ./file/path.jpg
```

or

```sh
npx unascii@latest ./file/path.jpg --width=50
```

    Options:
    --width Width of the image
    --widthSkew Width Skew of the image
    --output <console|file> Output as file or console
    --characters <minimalist|normal|normal2|alphabetic|alphanumeric|numerical|extended|math|arrow|grayscale|max|codepage437|blockelement> Output Character Set
    --grayscale <true|false> Output as grayscale or color only works with console

Use `npx unascii --help` for more usage info.

## Usage (API)

Install package:

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install unascii

# npm
npm install unascii

# yarn
yarn add unascii

# pnpm
pnpm install unascii

# bun
bun install unascii
```

<!-- /automd -->

Import:

<!-- automd:jsimport cjs cdn name="pkg" -->

**ESM** (Node.js, Bun)

```js
import {} from 'unascii'
```

**CommonJS** (Legacy Node.js)

```js
const {} = require('unascii')
```

**CDN** (Deno, Bun and Browsers)

```js
import {} from 'https://esm.sh/unascii'
```

<!-- /automd -->

## Development

<details>

<summary>local development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

</details>

## License

<!-- automd:contributors license=MIT -->

Published under the [MIT](https://github.com/shba007/unascii/blob/main/LICENSE) license.
Made by [community](https://github.com/shba007/unascii/graphs/contributors) 💛
<br><br>
<a href="https://github.com/shba007/unascii/graphs/contributors">
<img src="https://contrib.rocks/image?repo=shba007/unascii" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
