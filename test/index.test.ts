import { describe, expect, it, test } from 'vitest'
import { asciiPrint } from '../src'

describe('unascii', () => {
  test('Sanity Check', async () => {
    try {
      const print = await asciiPrint(`./temp/logo-1.png`, { width: 32, output: 'console' })
      console.log(await print.getImage())

      expect(true).toBe(true)
    } catch {
      expect(true).toBe(false)
    }
  })
})
