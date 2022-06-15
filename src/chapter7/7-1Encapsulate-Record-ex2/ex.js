import rawCustomerData from "./condition";
export default () => {
  const customerData = JSON.parse(JSON.stringify(rawCustomerData));

  function compareUsage(customerID, laterYear, month) {
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
  }

  function writeAmount(customerID, year, month, amount) {
    customerData[customerID].usages[year][month] = amount;
  }

  function print() {
    console.log(compareUsage(1920, 2016, 2));
    writeAmount(1920, 2016, 2, 100);
    console.log(compareUsage(1920, 2016, 2));
  }

  print();
};
