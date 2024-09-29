import { asciiPrint } from '../src'

const print = await asciiPrint(`./temp/logo-2.png`, { width: 48, output: 'console' })

console.log(await print.getImage())
