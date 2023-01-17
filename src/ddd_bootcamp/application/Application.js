import Product from '../domain/Product.js';
import Cart from '../domain/Cart.js';
import Item from '../domain/Item.js';
import Price from '../domain/Price.js';

class Application {
    run() {
        const cart1 = new Cart()
        const cart2 = new Cart()

        const sonyHeadphone = new Product("Sony Wireless headphone", new Price(70))

        const item1 = new Item(sonyHeadphone, 1)
        const item2 = new Item(sonyHeadphone, 2)
        cart1.add(item1)        
        cart2.add(item2)

        console.log(cart1.equals(cart2))
    }
}

Application.prototype.run()
