export default () => {
  class Organization {
    constructor(data) {
      this._data = data;
    }

    set name(aString) {
      this._data.name = aString;
    }

    get name() {
      return this._data.name;
    }
  }

  const organization = new Organization({
    name: "애크미 구스베리",
    country: "GB",
  });

  // eslint-disable-next-line no-unused-vars
  function getRawDataOfOrganization() {
    return organization._data;
  }
  function getOrganization() {
    return organization;
  }

  function print() {
    const newName = "토니 민수 제이슨";
    let result;
    result = `이름: ${getOrganization().name}`;
    console.log(result);

    getOrganization().name = newName;
    result = `이름: ${getOrganization().name}`;
    console.log(result);
  }
  print();
};
