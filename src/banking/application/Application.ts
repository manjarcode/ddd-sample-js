import Account from '../domain/Account.js'
import Address from '../domain/Address.js'
import Customer from '../domain/Customer.js'

export default class Application {

  ibanGenerator() {
    return  Math.random().toString(36).toUpperCase()
  }

  run() {
    const address1 = new Address("Calle Roca Casterly, 11, 28043 Madrid")

    const account1 = new Account('AD8933336258361714298499', address1)
    const account2 = new Account('ES2000757438941881443337', address1)

    const customer = new Customer('1', address1, [account1, account2])

    const address2 = new Address("Calle Invernalia, 27, 28020 Madrid")

    customer.setAddress(address2)

    console.log(customer.toString())
  }
}

Application.prototype.run()
