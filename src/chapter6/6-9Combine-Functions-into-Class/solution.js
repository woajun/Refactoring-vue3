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

    get baseCharge() {
      return baseRate(this.month, this.year) * this.quantity;
    }
  }

  function client1() {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const baseCharge = aReading.baseCharge;
    return baseCharge;
  }

  function client2() {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const taxableCharge = Math.max(
      0,
      aReading.baseCharge - taxThreshold(aReading.year)
    );
    return taxableCharge;
  }

  function client3() {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const basicChargeAmount = aReading.baseCharge;
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
