import rawCustomerData from "./condition/customerData";
const customerData = JSON.parse(JSON.stringify(rawCustomerData));

//읽기 예
function compareUsage(customerID, laterYear, month) {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

//쓰기 예
function writeAmount(customerID, year, month, amount) {
  customerData[customerID].usages[year][month] = amount;
}

export default {
  compareUsage,
  writeAmount,
};
