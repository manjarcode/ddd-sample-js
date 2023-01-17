export default class Price {
  #value
  #currency = 'USD'

  constructor(value) {
    this.#value = value
  }

  getValue() {
    return this.#value
  }

  equals(other) {
    return this.#value === other.#value && this.#currency === other.#currency
  }

  toString() {
    return `${this.#value}${this.#currency}`
  }
}