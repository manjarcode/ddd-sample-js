import Address from "./Address.js";

export default class Account {
  id: string;
  address: Address;

  constructor(id: string, address: Address) {
    this.id = id;  
    this.address = address;
  }

  getAddress() : Address {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  toString(identation: string = "") {
    identation += "  ";
    return `
  ${identation}id: ${this.id}
  ${identation}address: ${this.address.toString(identation)}`;
  }
}