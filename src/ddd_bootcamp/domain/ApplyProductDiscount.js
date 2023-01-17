import Price from "./Price.js";
import Product from "./Product.js";

export default class ApplyProductDiscount {
  #competitorProducts

  constructor() {
    this.#competitorProducts = [
      new Product('Sony Wireless headphones', new Price(50)),
    ]
  }

  #findProductByName(productName) {
    return this.#competitorProducts.find((p) => p.getName() === productName)
  }

  execute(productName) {
    const competitorProduct = this.#findProductByName(productName)

    if (!competitorProduct) {

      return productName.getPrice()
    }

    const discountedPrice = new Price(competitorProduct.getPrice().getValue() * 0.9)    

    return discountedPrice
  }
}