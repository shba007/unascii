import { runMain as _runMain, defineCommand } from 'citty';
import { consola } from 'consola';
import pathe from 'pathe';
import { env } from 'std-env';
import { createStorage } from 'unstorage';
import fsDriver from 'unstorage/drivers/fs';

import { description, name, version } from '../package.json';
import { type OutputType, asciiPrint } from '.';
import type { ASCIICharacterSet } from './utils';
import { isURL } from './utils';

const storage = createStorage({
  driver: fsDriver({ base: '.' }),
});

export const main = defineCommand({
  args: {
    characters: {
      description: 'Output Character Set',
      type: 'string',
      valueHint: `minimalist|normal|normal2|alphabetic|alphanumeric|numerical|extended|math|arrow|grayscale|max|codepage437|blockelement`,
    },
    grayscale: {
      description: 'Output as grayscale or color only works with console',
      type: 'boolean',
      valueHint: 'true|false',
    },
    output: {
      default: 'console',
      description: 'Output as file or console',
      type: 'string',
      valueHint: 'console|file',
    },
    path: {
      description: 'Path of the image',
      required: true,
      type: 'positional',
    },
    verbose: {
      default: false,
      description: 'Verbose Output',
      type: 'boolean',
      valueHint: 'true|false',
    },
    width: {
      default: '32',
      description: 'Width of the image',
      type: 'string',
    },
    widthSkew: {
      default: '1.75',
      description: 'Width Skew of the image',
      type: 'string',
    },
  },
  meta: {
    description,
    name,
    version,
  },
  async run({ args }) {
    if (args.verbose) {
      env.DEBUG = env.DEBUG || 'true';
    }

    const print = await asciiPrint(args.path, {
        characters: args.characters as unknown as ASCIICharacterSet,
        grayscale: args.grayscale,
        output: args.output as unknown as OutputType,
        width: args.width ? (Number.parseInt(args.width) ?? undefined) : undefined,
        widthSkew: args.widthSkew ? (Number.parseFloat(args.widthSkew) ?? undefined) : undefined,
      }),
      image = await print.getImage();
    if (args.output === 'console') {
      console.info(`\n${image}`);
    } else if (args.output === 'file') {
      const outputPath = pathe.format({
        ext: '.txt',
        name: isURL(args.path)
          ? args.path.split('/').at(-1)?.split('.')[0]
          : pathe.parse(args.path).name,
        root: '/',
      });
      await storage.setItem(outputPath, image);
    }

    if (!print) {
      consola.error('Print not started.');
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1);
    }

    // Consola.info('Printing to console...\n');
    // Consola.success(`\`${await print.getImage()}\``);
  },
});

export const runMain = () => _runMain(main);