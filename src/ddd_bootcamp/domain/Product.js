export default class Product {
    #name

    constructor(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }

    toString() {
        return `{ name: ${this.#name} }`
    }
}
