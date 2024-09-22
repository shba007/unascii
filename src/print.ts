import fs from 'node:fs/promises'
import path from 'pathe'
import { consola } from 'consola'

import { ASCIICharacterSet, convertImageToASCII } from './utils'

export interface PrintOptions {
  path: string
  size?: number
  output?: 'console' | 'file',
  characters?: ASCIICharacterSet,
  grayscale?: boolean
}

export interface Print {
  getImage: () => Promise<string>
}

export async function asciiPrint(opts: PrintOptions): Promise<undefined | Print> {
  const { path: filePath, size = 32, output = 'console', characters = 'alphanumeric', grayscale = false } = opts

  const fileFullPath = path.resolve(filePath)
  let image = ''

  if (output === 'console') {
    image = await convertImageToASCII(fileFullPath, size, 2, 1, characters, grayscale)

    consola.log(image)
  } else if (output === 'file') {
    image = await convertImageToASCII(fileFullPath, size, 2, 1, characters, true)

    const parsedPath = path.parse(filePath)
    const outputPath = path.format({
      dir: parsedPath.dir,
      name: parsedPath.name,
      ext: '.txt',
    })

    await fs.writeFile(path.resolve(outputPath), image, 'utf8')
  }

  return {
    getImage: async () => image,
  }
}
