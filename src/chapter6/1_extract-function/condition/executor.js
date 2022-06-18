import invoice from "./invoice.js";
export default class Executor {
  constructor(name, method) {
    this.name = name;
    this.method = method;
  }
  get result() {
    return this.method(invoice);
  }
  get expect() {
    return `고객명: 홍길동
채무액: 14500
마감일: 2022. 7. 18.`;
  }
}
