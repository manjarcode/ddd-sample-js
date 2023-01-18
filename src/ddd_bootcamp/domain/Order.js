export default class Order {
  #items
  
  constructor(items) {
    this.#items = items
  }

  getShippingCost() {
    const totalWeight = this.#items.reduce((acc, item) => {      
      const weight = item.getProduct().getWeight() * item.getQuantity()
      return acc + weight    
    }, 0)

    return totalWeight * 0.1
  }
}