export default () => {
  function cloneDeep(object) {
    return JSON.parse(JSON.stringify(object));
  }

  function enrichReading(original) {
    const result = cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    return result;

    function calculateBaseCharge(aReading) {
      return baseRate(aReading.month, aReading.year) * aReading.quantity;
    }
  }

  function client1() {
    const aReading = enrichReading(acquireReading());
    return aReading.baseCharge;
  }

  function client2() {
    const aReading = enrichReading(acquireReading());
    const taxableCharge = Math.max(
      0,
      aReading.baseCharge - taxThreshold(aReading.year)
    );
    return taxableCharge;
  }

  function client3() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
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
