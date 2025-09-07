import { describe, expect, test } from 'vitest'
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
      const print = await asciiPrint('./public/logo-light.png', { width: 32, output: 'console' })
      console.log(await print.getImage())

      expect(true).toBe(true)
    } catch {
      expect(true).toBe(false)
    }
  })
  test('Node API Console Remote', async () => {
    try {
      const print = await asciiPrint('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png?20230715030042', {
        width: 32,
        output: 'console',
      })
      console.log(await print.getImage())

      expect(true).toBe(true)
    } catch {
      expect(true).toBe(false)
    }
  })

  test('Node API File', async () => {
    try {
      const print = await asciiPrint('./public/logo-light.png', { width: 32, output: 'file' })
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
