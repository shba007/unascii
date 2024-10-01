// import { env, node } from "unenv";
import { ASCIICharacterSet, asciiCharacterSet, rgbToHex } from './utils'

export type OutputType = 'console' | 'file' | 'dom'

export interface PrintOptions {
  width?: number
  widthSkew?: number
  widthScale?: number
  output?: OutputType
  characters?: ASCIICharacterSet
  grayscale?: boolean
}

export interface Print {
  getImage: () => Promise<string>
}

// const envConfig = env(node, {});

let createCanvas: (width: number, height: number) => HTMLCanvasElement
let loadImage: (url: string) => Promise<HTMLImageElement>
let colorizer: (color: string, char: string, output?: OutputType) => string

async function loadFunctions() {
  if (process.env.BROWSER) {
    function createCanvasBrowser(width: number, height: number) {
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height

      return canvas
    }
    async function loadImageBrowser(url: string): Promise<HTMLImageElement> {
      return new Promise((resolve) => {
        const image = new Image()
        image.crossOrigin = 'Anonymous'
        image.addEventListener('load', () => resolve(image))

        image.src = url
      })
    }

    createCanvas = createCanvasBrowser
    loadImage = loadImageBrowser
    colorizer = (color, char, output) => (output === 'console' ? char : `<span style="color: ${color}">${char}</span>`)
  } else {
    try {
      const { createCanvas: createCanvasNode, loadImage: loadImageNode } = await import('canvas')
      const { Chalk } = await import('chalk')

      createCanvas = createCanvasNode as unknown as typeof createCanvas
      loadImage = loadImageNode as unknown as typeof loadImage

      const chalk = new Chalk()
      colorizer = (color, char, output) => (output === 'console' ? chalk.hex(color)(char) : char)
    } catch {
      throw new Error('Unable to import canvas/chalk modules')
    }
  }
}

function getAsciiChar(grayscale: number, widthScale: number, characterSet: ASCIICharacterSet): string {
  const chars = asciiCharacterSet[characterSet] + ' '.repeat(widthScale)
  const index = Math.floor((grayscale * (chars.length - 1)) / 255)
  return chars[index]
}

function imageDataToASCII(imageData: ImageData, widthScale: number, characterSet: ASCIICharacterSet, isGrayscale: boolean, outputType: OutputType): string {
  let ascii = ''
  const { width, height, data } = imageData

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const a = data[i + 3]

      if (a < 16) {
        ascii += ' '
        continue
      }

      const brightness = 0.3 * r + 0.59 * g + 0.11 * b
      let char = getAsciiChar(brightness, widthScale, characterSet)

      if (!isGrayscale) {
        const hexColor = rgbToHex({ r, g, b })
        char = colorizer(hexColor, char, outputType)
      }

      ascii += char
    }
    ascii += '\n'
  }

  return ascii
}

async function imagePathToASCII(imagePath: string, width: number, widthSkew: number, widthScale: number, characterSet: ASCIICharacterSet, isGrayscale: boolean, outputType: OutputType) {
  if (process.env.DEBUG) console.time('loadImage')
  const image = await loadImage(imagePath)
  if (process.env.DEBUG) console.timeEnd('loadImage')
  const aspectRatio = image.width / image.height
  const canvas = createCanvas(width * widthSkew, Math.floor(width / aspectRatio))

  const ctx = canvas.getContext('2d')!
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

  if (process.env.DEBUG) console.time('imageDataToASCII')
  const data = imageDataToASCII(imageData, widthScale, characterSet, isGrayscale, outputType)
  if (process.env.DEBUG) console.timeEnd('imageDataToASCII')

  return data
}

export async function asciiPrint(imagePath: string, opts?: PrintOptions): Promise<Print> {
  const { width = 32, widthSkew = 1.75, widthScale = 1, output = 'console', characters = 'alphanumeric', grayscale = false } = opts ?? {}
  await loadFunctions()

  if (process.env.DEBUG) console.time('imagePathToASCII')
  const image = await imagePathToASCII(imagePath, width, widthSkew, widthScale, characters, grayscale, output)
  if (process.env.DEBUG) console.timeEnd('imagePathToASCII')

  return {
    getImage: async () => image,
  }
}
