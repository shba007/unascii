<p align="center">
  <picture>
    <source srcset="./public/logo-dark.png" media="(prefers-color-scheme: dark)">
    <source srcset="./public/logo-light.png" media="(prefers-color-scheme: light)">
    <img src="./public/logo-light.png" alt="Logo" width="128">
  </picture>
</p>

# UnASCII

[![npm version](https://img.shields.io/npm/v/@shba007/unascii?color=blue)](https://npmjs.com/package/@shba007/unascii)
[![npm downloads](https://img.shields.io/npm/dm/@shba007/unascii?color=blue)](https://npmjs.com/@shba007/unascii)
[![License](https://img.shields.io/npm/l/@shba007/unascii?color=blue)](https://github.com/shba007/unascii?tab=MIT-1-ov-file)

> Print any image in ascii anywhere (browser/cli)

<video controls src="public/preview.mp4" title="Demo" loop muted autoplay></video>

## Usage (CLI)

Globally run unascii with `npx`:

```sh
npx @shba007/unascii@latest ./file/path.jpg
```

or

```sh
npx @shba007/unascii@latest ./file/path.jpg --width=50
```

    Options:
    --width Width of the image
    --widthSkew Width Skew of the image
    --output <console|file> Output as file or console
    --characters <minimalist|normal|normal2|alphabetic|alphanumeric|numerical|extended|math|arrow|grayscale|max|codepage437|blockelement> Output Character Set
    --grayscale <true|false> Output as grayscale or color only works with console

Use `npx @shba007/unascii --help` for more usage info.

## Usage (API)

Install package:

```sh
# ✨ Auto-detect
npx nypm install @shba007/unascii

# npm
npm install @shba007/unascii

# yarn
yarn add @shba007/unascii

# pnpm
pnpm install @shba007/unascii

# bun
bun install @shba007/unascii
```

Import:

**ESM** (Node.js, Bun)

```js
import { asciiPrint } from '@shba007/unascii'
```

**CommonJS** (Legacy Node.js)

```js
const { asciiPrint } = require('@shba007/unascii')
```

**CDN** (Deno, Bun and Browsers)

```js
import { asciiPrint } from 'https://esm.sh/@shba007/unascii'
```

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

Published under the [MIT](https://github.com/shba007/unascii/blob/main/LICENSE) license.
<br><br>
<a href="https://github.com/shba007/unascii/graphs/contributors">
<img src="https://contrib.rocks/image?repo=shba007/unascii" />
</a>
