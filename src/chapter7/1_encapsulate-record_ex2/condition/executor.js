export default class Executor {
  constructor(name, object) {
    this.name = name;
    this.object = object;
  }
  get result() {
    let message = "";
    message += JSON.stringify(this.object.compareUsage(1920, 2016, 2));
    this.object.writeAmount(1920, 2016, 2, 100);
    message += JSON.stringify(this.object.compareUsage(1920, 2016, 2));
    return message;
  }
  get expect() {
    return `{"laterAmount":55,"change":-8}{"laterAmount":100,"change":37}`;
  }
}
