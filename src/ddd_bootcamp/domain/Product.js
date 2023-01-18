export default class Product {
    #name
    #price
    #weight

    constructor(name, price, weight) {
        this.#name = name
        this.#price = price
        this.#weight = weight
    }

    getName() {
        return this.#name
    }

    getPrice() {
        return this.#price
    }

    setPrice(price) {
        this.#price = price
    }

    getWeight() {
      return this.#weight
    }
    
    toString() {
        return `{ name: ${this.#name}, price: ${this.#price} }`
    }
}
