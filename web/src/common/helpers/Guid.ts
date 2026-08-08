import { v4 } from 'uuid'

export class Guid {
  #value: string
  get value() {
    return this.#value
  }

  private constructor(value: string) {
    this.#value = value
  }
  static new = (): Guid => new Guid(v4())
  static from = (input: string): Guid => new Guid(input)

  isSame = (id: Guid): boolean => this.#value === id.value
}
