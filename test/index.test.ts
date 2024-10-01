import { describe, expect, it, test } from 'vitest'
import { asciiPrint } from '../src'

describe('unascii', () => {
  test('Node CLI Console', async () => {
    expect(true).toBe(true)
  })

  test('Node CLI File', () => {
    expect(true).toBe(true)
  })

  test('Node API Console', async () => {
    try {
      const print = await asciiPrint(`./temp/logo-1.png`, { width: 32, output: 'console' })
      console.log(await print.getImage())

      expect(true).toBe(true)
    } catch {
      expect(true).toBe(false)
    }
  })

  test('Node API File', async () => {
    try {
      const print = await asciiPrint(`./temp/logo-1.png`, { width: 32, output: 'file' })
      console.log(await print.getImage())

      expect(true).toBe(true)
    } catch {
      expect(true).toBe(false)
    }
  })

  test('Browser DOM', () => {
    expect(true).toBe(true)
  })

  test('Browser Console', () => {
    expect(true).toBe(true)
  })
})
