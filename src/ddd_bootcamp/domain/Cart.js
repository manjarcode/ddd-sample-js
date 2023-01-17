import Item from './Item.js'

export default class Cart {
    items = []
    events = []

    add(item) {
        this.items.push(item)
    }

    delete(product) {
        this.items = this.items.filter(ci => ci.getProduct() !== product)
        this.events.push({
          message:`Product ${product} was deleted from cart`, 
          product: product
        })
    }

    getProducts() {
        return this.items
    }

    getRemovedProducts() {
        return this.events
    }
    
    toString() {
      return `{ products: [${this.items.map(ci => ci.toString()).join(', ')}] }`
    }

    equals(other) {
      return this.items.every(i => other.items.find(j => i.equals(j)))
    }

}
