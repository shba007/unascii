import { describe, expect, test } from 'vitest';
import { asciiPrint } from '../src';

describe('unascii', () => {
  test('Node CLI Console', async () => {
    expect(true).toBe(true);
  });

  test('Node CLI File', () => {
    expect(true).toBe(true);
  });

  test('Node API Console', async () => {
    try {
      const print = await asciiPrint('./public/logo-light.png', { output: 'console', width: 32 });
      console.log(await print.getImage());

      expect(true).toBe(true);
    } catch {
      expect(true).toBe(false);
    }
  });
  test('Node API Console Remote', async () => {
    try {
      const print = await asciiPrint('https://redcatpictures.com/logo-dark.png', {
        output: 'console',
        width: 32,
      });
      console.log(await print.getImage());

      expect(true).toBe(true);
    } catch {
      expect(true).toBe(false);
    }
  });

  test('Node API File', async () => {
    try {
      const print = await asciiPrint('./public/logo-light.png', { output: 'file', width: 32 });
      console.log(await print.getImage());

      expect(true).toBe(true);
    } catch {
      expect(true).toBe(false);
    }
  });

  test('Browser DOM', () => {
    expect(true).toBe(true);
  });

  test('Browser Console', () => {
    expect(true).toBe(true);
  });
});