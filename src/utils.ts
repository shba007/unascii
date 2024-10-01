export type ASCIICharacterSet = keyof typeof asciiCharacterSet

export const asciiCharacterSet = {
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

export function rgbToHex({ r, g, b }: { r: number; g: number; b: number }) {
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

export function isURL(str: string) {
  const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/

  return urlPattern.test(str)
}
