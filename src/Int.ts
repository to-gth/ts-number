import ApplicationError from '../ApplicationError/ApplicationError'
import IntRange from './IntRange'
import NaturalInt from './NaturalInt'
import { Brand } from 'ts-brand'

type Int = Brand<number, 'Int'>

namespace Int {

  export const admits = (a: number): a is Int => {
    return Number.isInteger(a)
  }

  export const corrected = (n: number): Int => {
    const corrected = Math.floor(n)
    if (admits(corrected)) return corrected
    throw new ApplicationError(`Failed to correct a number [${ n }] as Int`)
  }

  export const from = (n: number): Int => {
    if (admits(n)) return n
    throw new ApplicationError(`Failed to create an int from [${ n }]`)
  }
}

namespace Int {

  export const clampedWithin = (range: IntRange<Int, NaturalInt>, i: Int): Int => {

    const { start } = range
    if (i <= start) return Int.from(start)
    const end = IntRange.endOf(range)
    if (end <= i) return Int.from(end)
    return i
  }
}

namespace Int {

  // export const filled = <N, R = (N extends number ? number : any)>(n: N, length: number): R[] => {
  //   return Array(length).fill(n) as R[]
  // }

  export const sEmptied = (length: Int): undefined[] => {
    return Array(length).fill(undefined)
  }
}

export default Int
