import ApplicationError from '../ApplicationError/ApplicationError'
import Int from './Int'
import Natural from '../Natural/Natural'
import NaturalIntRange from './NaturalIntRange'
import { Brand } from 'ts-brand'

type NaturalInt = Brand<Natural & Int, 'NaturalInt'>

namespace NaturalInt {

  export const admits = (n: number): n is NaturalInt => {
    if (!Natural.admits(n)) return false
    if (!Int.admits(n)) return false
    return true
  }

  export const from = (n: number): NaturalInt => {
    if (admits(n)) return n
    throw new ApplicationError(`Failed to create a NaturalInt from ${ n }`)
  }
}

namespace NaturalInt {

  export const sFilled = <N extends NaturalInt, R = N>(n: N, length: NaturalInt): R[] => {
    return Array(length).fill(n)
  }

  export const sFrom = ({ start, length }: NaturalIntRange<NaturalInt, NaturalInt>): NaturalInt[] => {
    return sFilled(start, length).map((v, i) => from(v + i))
  }
}

namespace NaturalInt {

  export const clampedWithin =
  (range: NaturalIntRange<NaturalInt, NaturalInt>, n: NaturalInt): NaturalInt | undefined => {
    const clamped = Natural.clampedWithin(range, n)
    if (clamped === undefined) return
    return from(clamped)
  }

  export const corrected = (n: number): NaturalInt => {
    const natural = Natural.corrected(n)
    const naturalInt = Int.corrected(natural)
    if (admits(n)) return naturalInt as NaturalInt
    throw new ApplicationError(`Failed to correct to NaturalInt from n: ${ n }`)
  }
}

export default NaturalInt
