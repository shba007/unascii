import { createCanvas, loadImage, ImageData } from 'canvas'
import chalk from 'chalk'

function rgbToHex({ r, g, b }: { r: number; g: number; b: number }) {
  // Ensure the values are within the valid range (0-255)
  r = Math.max(0, Math.min(255, Math.round(r)))
  g = Math.max(0, Math.min(255, Math.round(g)))
  b = Math.max(0, Math.min(255, Math.round(b)))

  // Convert each component to a two-digit hexadecimal string
  const redHex = r.toString(16).padStart(2, '0')
  const greenHex = g.toString(16).padStart(2, '0')
  const blueHex = b.toString(16).padStart(2, '0')

  // Combine the components and return the result
  return `#${redHex}${greenHex}${blueHex}`
}

const asciiCharacterSet = {
  minimalist: '#+-.',
  normal: '@%#*+=-:.',
  normal2: '&$Xx+;:.',
  alphabetic: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz',
  numerical: '0896452317',
  extended: '@%#{}[]()<>^*+=~-:.',
  math: '+-×÷=≠≈∞√π',
  arrow: '↑↗→↘↓↙←↖',
  grayscale: '@$BWM#*oahkbdpwmZO0QCJYXzcvnxrjft/|()1{}[]-_+~<>i!lI;:,"^\'.',
  max: "ÆÑÊŒØMÉËÈÃÂWQBÅæ#NÁþEÄÀHKRŽœXgÐêqÛŠÕÔA€ßpmãâGµø\u00F0é8ÚÜ$ëdÙýèÓÞÖåÿÒbªFDñáZPäšÇàhûŸÝkŸ®S9žUTeµuOyxÎ¾f4õ5ôú&aü™2ùçw©Y£0V\u00C7LrÌ³3Ïì\u00D3C@n\u00C4òs¢u‰½¼‡zJ\u0123%¤Itoc«rjv1l\u00AD=ïì<>i7†[¿?×}*{+()/»«•¬|!¡÷¦¯—^ª„\"\"~³º²–°­¹‹›;:''‚'˜ˆ¸…·¨´",
  codepage437: '█▓▒░',
  blockelement: '█',
}

export type ASCIICharacterSet = keyof typeof asciiCharacterSet;

function getAsciiChar(grayscale: number, spaceDensity: number, characterSet: ASCIICharacterSet): string {
  const chars = asciiCharacterSet[characterSet] + ' '.repeat(spaceDensity)
  const index = Math.floor((grayscale * (chars.length - 1)) / 255)
  return chars[index]
}

function imageDataToAscii(imageData: ImageData, spaceDensity: number, characterSet: ASCIICharacterSet, isGrayscale: boolean): string {
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

      let brightness = 0.3 * r + 0.59 * g + 0.11 * b
      let char = getAsciiChar(brightness, spaceDensity, characterSet)

      if (!isGrayscale) char = chalk.hex(rgbToHex({ r, g, b }))(char)

      ascii += char
    }
    ascii += '\n'
  }

  return ascii
}

export async function convertImageToASCII(imagePath: string, width: number, widthDensity: number, spaceDensity: number, characterSet: ASCIICharacterSet, isGrayscale: boolean) {
  const image = await loadImage(imagePath)
  const aspectRatio = image.width / image.height
  const canvas = createCanvas(width * widthDensity, Math.floor(width / aspectRatio))
  const ctx = canvas.getContext('2d')

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const ascii = imageDataToAscii(imageData, spaceDensity, characterSet, isGrayscale)

  return ascii
}
