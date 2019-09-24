
abstract class AbstractCustomError extends Error {

  constructor(public message: string) {

      super(message)
      Object.setPrototypeOf(this, new.target.prototype)
  }
}

export default AbstractCustomError
