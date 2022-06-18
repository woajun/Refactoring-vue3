import plays from "./plays";
import invoices from "./invoices";
import expect from "./output";

export default class Executor {
  constructor(name, statement) {
    this.name = name;
    this.statement = statement;
  }
  get result() {
    return this.statement ? this.statement(invoices, plays) : undefined;
  }
  get expect() {
    return expect;
  }
}
