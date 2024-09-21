import { existsSync } from "node:fs";
import consola from "consola";

export interface TunnelOptions {
  path?: string;
  size?: number | string;
}

export interface Tunnel {
  getImage: () => Promise<string>;
}

export async function asciiPrint(
  opts: TunnelOptions,
): Promise<undefined | Tunnel> {

  const image = "*********"

  return {
    getImage: async () => image
  };
}