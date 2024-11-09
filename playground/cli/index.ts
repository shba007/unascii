import { asciiPrint } from '../src'

const print = await asciiPrint(`./temp/logo-1.png`, { width: 48, output: 'console' })

console.log(await print.getImage())
