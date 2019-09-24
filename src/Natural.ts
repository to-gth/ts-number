import ApplicationError from 'ts-applicatin-error'
import Real from './Real'
import { Brand } from 'ts-brand'

type Natural = Brand<number, 'Natural'>

namespace Natural {

  export const min = 0 as Natural

  export const admits = (n: number): n is Natural => {
    return min <= n
  }

  export const from = (n: number): Natural => {
    if (admits(n)) return n
    throw new ApplicationError(`Failed to create a Natural from ${ n }`)
  }

  export const corrected = (n: number): Natural => {
    if (admits(n)) return n
    return min
  }
}

namespace Natural {

  export const clampedWithin = (bottom: Natural, top: Natural, r: Real): Natural => {
    const clamped = Real.clampedWithin(bottom, top, r)
    if (admits(clamped)) return clamped
    throw new ApplicationError(`Failed to clamp r: ${ r }`)
  }
}

export default Natural
