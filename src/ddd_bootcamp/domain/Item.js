export default class Item {
  #product
  #quantity

  constructor(product, quantity) {
    this.#product = product
    this.#quantity = quantity
  }

  getProduct() {
    return this.#product
  }

  getQuantity() {
    return this.#quantity
  }

  toString() {
    return `{ product: ${this.#product}, quantity: ${this.#quantity} }`
  }

  equals(other) {
    return this.#product === other.#product && this.#quantity === other.#quantity
  }
}