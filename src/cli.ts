import { defineCommand, runMain as _runMain } from "citty";
import consola from "consola";
import { name, description, version } from "../package.json";
import { asciiPrint } from "./print";

export const print = defineCommand({
  meta: {
    name: "print",
    description: "Print Image to Console",
  },
  args: {
    path: {
      type: "positional",
      description: "Path of the image",
      required: true,
    },
    size: {
      type: "string",
      description: "Size of the image",
    },
  },
  async run({ args }) {
    const print = await asciiPrint({
      path: args.path,
    });

    if (!print) {
      console.log("Print not started.");
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1);
    }

    consola.info("Printing to console...\n");
    consola.success(`\`${await print.getImage()}\``);
  },
});

export const main = defineCommand({
  meta: {
    name,
    description,
    version,
  },
  subCommands: {
    print,
  },
});

export const runMain = () => _runMain(main);