import AbstractCustomError from './AbstractCustomError'

class ApplicationError extends AbstractCustomError {

  public name = 'ApplicationError'

  constructor(message: string) {

    super(message)
  }

  public toString() {

    return this.name + ': ' + this.message
  }
}

export default ApplicationError
