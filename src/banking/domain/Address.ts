export default class Address {
  #value : string

  constructor(value: string)  {
    this.#value = value;
  }

  getValue() : string {
    return this.#value;
  }

  toString(identation: string) : string {
    identation += '  ';
    return `
${identation}  value: ${this.#value}`;
  }
}