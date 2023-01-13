export default class Cart {
    #products = []

    add(product) {
        this.#products.push(product)
    }

    getProducts() {
        return this.#products
    }

    toString() {
      return `{ products: [${this.#products.join(', ')}] }`
    }
}
