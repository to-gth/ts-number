
type Real = number

namespace Real {

  export const admits = (a: any): a is Real => {
    return typeof a === 'number'
  }
}

namespace Real {

  export const isLessThan = (top: Real, r: Real): boolean => r < top
  export const isMoreThan = (bottom: Real, r: Real): boolean => bottom < r
  // export const isZeroOrMore = (r: Real): boolean => !isLessThan(0, r)

  export const clampedWithin = (bottom: Real, top: Real, r: Real): Real => {

    if (!isMoreThan(bottom, r)) return bottom
    if (!isLessThan(top, r)) return top
    return r
  }
}

export default Real
