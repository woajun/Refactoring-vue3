import example from "./example";

class Executor {
  constructor(name, js) {
    this.name = name;
    this.js = js;
  }
  get result() {
    return this.js;
  }
  get expect() {
    return `{"name":"애크미 구스베리","country":"GB"}<h1>애크미 구스베리</h1>{"name":"유재석","country":"GB"}`;
  }
}
export default [new Executor("예제", example)];
