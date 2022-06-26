export default class Tester {
  constructor(result, expect) {
    this.result = JSON.stringify(result);
    this.expect = JSON.stringify(expect);
  }
  get test() {
    return this.result === this.expect;
  }
}
