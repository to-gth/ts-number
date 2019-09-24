
type Real = number

namespace Real {

  export const admits = (a: any): a is Real => {
    return typeof a === 'number'
  }
}

namespace Real {

  export const isOrMore = (less: number, more: number): boolean => less <= more
  export const isZeroOrMore = (more: number): boolean => isOrMore(0, more)
}

namespace Real {

  interface RealRange {
    start: number,
    length: number,
  }

  const endOf = ({ start, length }: RealRange ): Real => {
    return start + length - 1
  }

  export const clampedWithin = (range: RealRange, r: Real): Real => {

    const { start } = range
    if (r <= start) return start
    const end = endOf(range)
    if (end <= r) return end
    return r
  }
}

export default Real
