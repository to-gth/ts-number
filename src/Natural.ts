import ApplicationError from '../ApplicationError/ApplicationError'
import Range from '../Real/Range'
import Real from '../Real/Real'
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
}

namespace Natural {

  const overlapsWith = (range: Range<number, Natural>): boolean => {
    const end = Range.endOf(range)
    return (admits(end))
  }

  export const clampedWithin = (range: Range<number, Natural>, n: Natural): Natural | undefined => {
    if (!overlapsWith(range)) return undefined
    const clamped = Real.clampedWithin(range, n)
    if (admits(clamped)) return clamped
    return from(min)
  }

  export const corrected = (n: number): Natural => {
    if (admits(n)) return n
    return min
  }
}

export default Natural
