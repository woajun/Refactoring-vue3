import plays from "./plays";
import invoices from "./invoices";

export default class Executor {
  constructor(name, statement) {
    this.name = name;
    this.statement = statement;
  }
  get result() {
    return this.statement ? this.statement(invoices, plays) : undefined;
  }
  get expect() {
    return `청구 내역 (고객명: BigCo)
 Hamlet: $650.00(55석)
 As You Like It: $580.00(35석)
 Othello: $500.00(40석)
총액: $1,730.00
적립 포인트: 47점
`;
  }
}
