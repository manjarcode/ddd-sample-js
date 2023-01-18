import Account from "./Account.js";
import Address from "./Address.js";

export default class Customer {
  id: string;
  address: Address;
  accounts: Account[];

  constructor(id: string, address: Address, accounts: Account[]) {
    this.id = id;
    this.address = address;
    this.accounts = accounts;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
    this.accounts.forEach(ac => ac.setAddress(address));
  }
  
  toString(identation: string = '') {
    identation += '  ';    
    return `
${identation} id: ${this.id}, 
${identation} address: ${this.address.toString(identation)}
${identation} accounts: ${this.accounts.map(ac => ac.toString(identation))})`;
  }
}