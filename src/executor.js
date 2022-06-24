export default class Executor {
  constructor(buttonName, result, expect) {
    this.name = buttonName;
    this.result = JSON.stringify(result);
    this.expect = JSON.stringify(expect);
  }
}
