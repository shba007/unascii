import { ASCIICharacterSet } from "../utils"

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