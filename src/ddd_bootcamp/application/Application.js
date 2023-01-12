import Product from '../domain/Product.js';
import Cart from '../domain/Cart.js';

export default class Application {
    run() {
        const cart = new Cart()
        const product = new Product("Apple Pencil")
        cart.add(product);

        console.log("Cart = " + cart);
        const products = cart.getProducts();

        console.log("----------------------------------------");
        console.log("products = " + products);
        console.log("----------------------------------------");
    }
}
