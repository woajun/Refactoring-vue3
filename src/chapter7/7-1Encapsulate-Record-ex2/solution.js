import rawCustomerData from "./condition";
export default () => {
  class CustomerData {
    constructor(data) {
      this._data = data;
    }
  }
  let customerData = JSON.parse(JSON.stringify(rawCustomerData));

  // eslint-disable-next-line no-unused-vars
  function getCustomerData() {
    return customerData;
  }
  function getRawDataOfCustomers() {
    return customerData;
  }

  // eslint-disable-next-line no-unused-vars
  function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
  }

  function compareUsage(customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier =
      getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
  }

  function setUsage(customerID, year, month, amount) {
    getRawDataOfCustomers()[customerID].usages[year][month] = amount;
  }

  function print() {
    console.log(compareUsage(1920, 2016, 2));
    setUsage(1920, 2016, 2, 100);
    console.log(compareUsage(1920, 2016, 2));
  }

  print();
};
