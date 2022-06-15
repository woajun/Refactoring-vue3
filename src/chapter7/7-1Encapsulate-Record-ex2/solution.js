import rawCustomerData from "./condition";
export default () => {
  let customerData = JSON.parse(JSON.stringify(rawCustomerData));

  function getRawDataOfCustomers() {
    return customerData;
  }

  // eslint-disable-next-line no-unused-vars
  function setRawDataOfCustomers(arg) {
    customerData = arg;
  }

  function compareUsage(customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier =
      getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
  }

  function writeAmount(customerID, year, month, amount) {
    getRawDataOfCustomers()[customerID].usages[year][month] = amount;
  }

  function print() {
    console.log(compareUsage(1920, 2016, 2));
    writeAmount(1920, 2016, 2, 100);
    console.log(compareUsage(1920, 2016, 2));
  }

  print();
};
