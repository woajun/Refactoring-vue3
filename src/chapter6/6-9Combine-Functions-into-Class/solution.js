export default () => {
  class Reading {
    constructor(data) {
      this._customer = data.customer;
      this._quantity = data.quantity;
      this._month = data.month;
      this._year = data.year;
    }
    get customer() {
      return this._customer;
    }
    get quantity() {
      return this._quantity;
    }
    get month() {
      return this._month;
    }
    get year() {
      return this._year;
    }

    get calculateBaseCharge() {
      return baseRate(this.month, this.year) * this.quantity;
    }
  }

  function client1() {
    const aReading = acquireReading();
    const baseCharge =
      baseRate(aReading.month, aReading.year) * aReading.quantity;
    return baseCharge;
  }

  function client2() {
    const aReading = acquireReading();
    const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
    return taxableCharge;
  }

  function client3() {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const basicChargeAmount = aReading.calculateBaseCharge;
    return basicChargeAmount;
  }

  function acquireReading() {
    const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
    return reading;
  }

  function baseRate(month, year) {
    return new Date(year, month) > new Date(2017, 4) ? 10 : 9;
  }

  function taxThreshold(year) {
    return year > 2015 ? 1 : 2;
  }

  function print() {
    console.log(`client1의 세금: ${client1()}`);
    console.log(`client2의 세금: ${client2()}`);
    console.log(`client3의 세금: ${client3()}`);
  }

  print();
};
