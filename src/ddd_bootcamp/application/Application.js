import Product from '../domain/Product.js';
import Cart from '../domain/Cart.js';
import Item from '../domain/Item.js';
import Price from '../domain/Price.js';
import ApplyProductDiscount from '../domain/ApplyProductDiscount.js';

export default class Application {
    run() {
        const cart1 = new Cart()

        const sonyHeadphone = new Product("Sony Wireless headphones", new Price(70), 1.3)
        const applePencil = new Product("Apple Pencil", new Price(100),0.3)

        const item1 = new Item(sonyHeadphone, 1, 10)
        const item2 = new Item(applePencil, 2, 10)
        cart1.add(item1)
        cart1.add(item2)

        
        const order = cart1.checkout()
        const shippingCost = order.getShippingCost()

        console.log(`Shipping cost: ${shippingCost}`)
    }
}

Application.prototype.run()
