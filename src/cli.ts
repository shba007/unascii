import { defineCommand, runMain as _runMain } from 'citty'
import consola from 'consola'
import { name, description, version } from '../package.json'
import { asciiPrint } from './print'
import { ASCIICharacterSet } from './utils'

export const print = defineCommand({
  meta: {
    name: 'print',
    description: 'Print Image to Console',
  },
  args: {
    path: {
      type: 'positional',
      description: 'Path of the image',
      required: false,
    },
    size: {
      type: 'string',
      description: 'Size of the image',
    },
    output: {
      type: 'string',
      description: 'Output as file or console',
      valueHint: 'console|file',
    },
    characters: {
      type: 'string',
      description: 'Output Character Set',
      valueHint: 'minimalist|normal|normal2|alphabetic|alphanumeric|numerical|extended|math|arrow|grayscale|max|codepage437|blockelement',
    },
    grayscale: {
      type: 'boolean',
      description: 'Output as grayscale or color only works with console',
      valueHint: 'true|false',
    },
  },
  async run({ args }) {
    if (args.verbose) {
      process.env.DEBUG = process.env.DEBUG || "true";
    }

    const print = await asciiPrint({
      path: args.path,
      size: parseInt(args.size),
      output: args.output as 'console' | 'file',
      characters: args.characters as unknown as ASCIICharacterSet,
      grayscale: args.grayscale
    })

    if (!print) {
      consola.log('Print not started.')
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1)
    }

    // consola.info('Printing to console...\n');
    // consola.success(`\`${await print.getImage()}\``);
  },
})

export const main = defineCommand({
  meta: {
    name,
    description,
    version,
  },
  subCommands: {
    print,
  },
})

export const runMain = () => _runMain(main)
