import Item from './Item.js'
import Order from './Order.js'

export default class Cart {
    items = []
    events = []
    #checkout = false

    #checkoutGuard() {
      if (this.#checkout) {
        throw new Error('Cart is already checked out')
      }      
    }
    add(item) {
      this.#checkoutGuard()
      this.items.push(item)
    }

    delete(item) {
      this.#checkoutGuard()

      this.items = this.items.filter(i => !i.equals(item))
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

    checkout(){
      this.#checkout = true

      return new Order(this.items)
    }
}
