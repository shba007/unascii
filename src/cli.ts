import { defineCommand, runMain as _runMain } from 'citty'
import consola from 'consola'
import { createStorage } from 'unstorage'
import fsDriver from 'unstorage/drivers/fs'

import { name, description, version } from '../package.json'
import { asciiPrint, OutputType } from './print'
import { ASCIICharacterSet } from './utils'

const storage = createStorage({
  driver: fsDriver({ base: '.' }),
})

export const main = defineCommand({
  meta: {
    name,
    description,
    version,
  },
  args: {
    path: {
      type: 'positional',
      description: 'Path of the image',
      required: true,
    },
    width: {
      type: 'string',
      description: 'Width of the image',
      default: '32',
    },
    output: {
      type: 'string',
      description: 'Output as file or console',
      valueHint: 'console|file',
      default: 'console',
    },
    characters: {
      type: 'string',
      description: 'Output Character Set',
      valueHint: `minimalist|normal|normal2|alphabetic|alphanumeric|numerical|extended|math|arrow|grayscale|max|codepage437|blockelement`,
    },
    grayscale: {
      type: 'boolean',
      description: 'Output as grayscale or color only works with console',
      valueHint: 'true|false',
    },
    verbose: {
      type: 'boolean',
      description: 'Verbose Output',
      valueHint: 'true|false',
      default: false,
    },
  },
  async run({ args }) {
    if (args.verbose) {
      process.env.DEBUG = process.env.DEBUG || 'true'
    }

    const print = await asciiPrint(args.path, {
      width: args.width ? (Number.parseInt(args.width) ?? undefined) : undefined,
      output: args.output as unknown as OutputType,
      characters: args.characters as unknown as ASCIICharacterSet,
      grayscale: args.grayscale,
    })

    const image = await print.getImage()
    if (args.output === 'console') {
      consola.info('\n' + image)
    } else if (args.output === 'file') {
      const outputPath = './temp' + args.path
      await storage.setItem(outputPath, image)
    }

    if (!print) {
      consola.error('Print not started.')
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1)
    }

    // consola.info('Printing to console...\n');
    // consola.success(`\`${await print.getImage()}\``);
  },
})

export const runMain = () => _runMain(main)
