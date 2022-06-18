import example from "./example";

class Executor {
  constructor(name, js) {
    this.name = name;
    this.js = js;
  }
  get method() {
    console.log(this.js.compareUsage(1920, 2016, 2));
    this.js.writeAmount(1920, 2016, 2, 100);
    console.log(this.js.compareUsage(1920, 2016, 2));
    return print;
  }
}
export default [new Executor("예제", example)];

function print() {}
