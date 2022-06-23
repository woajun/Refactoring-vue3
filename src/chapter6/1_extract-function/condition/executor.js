import invoice from "./invoice.js";
export default class Executor {
  constructor(name, method, expect) {
    this.name = name;
    this.method = method;
    this.expectResult = expect;
  }
  get result() {
    return this.method(invoice);
  }
  get expect() {
    return this.expectResult(invoice);
  }
}
