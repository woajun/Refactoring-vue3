export default class Executor {
  constructor(name, js) {
    this.name = name;
    this.js = js;
  }
  get result() {
    let message = "";
    message += JSON.stringify(this.js.compareUsage(1920, 2016, 2));
    this.js.writeAmount(1920, 2016, 2, 100);
    message += JSON.stringify(this.js.compareUsage(1920, 2016, 2));
    return message;
  }
  get expect() {
    return `{"laterAmount":55,"change":-8}{"laterAmount":100,"change":37}`;
  }
}
