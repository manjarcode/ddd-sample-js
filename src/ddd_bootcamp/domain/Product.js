export default class Product {
    #name
    #price

    constructor(name, price) {
        this.#name = name
        this.#price = price
    }

    getName() {
        return this.#name
    }

    getPrice() {
        return this.#price
    }

    toString() {
        return `{ name: ${this.#name}, price: ${this.#price} }`
    }
}
