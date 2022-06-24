function acquireReading() {
  const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
  return reading;
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
  const aReading = acquireReading();
  const basicChargeAmount = calculateBaseCharge(aReading);
  return basicChargeAmount;

  function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
}

function baseRate(month, year) {
  return new Date(year, month) > new Date(2017, 4) ? 10 : 9;
}

function taxThreshold(year) {
  return year > 2015 ? 1 : 2;
}

const taxList = {
  client1: client1(),
  client2: client2(),
  client3: client3(),
};

export default taxList;
