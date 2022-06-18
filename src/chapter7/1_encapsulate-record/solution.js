export default () => {
  class Organization {
    constructor(data) {
      this._name = data.name;
      this._country = data.country;
    }

    get name() {
      return this._name;
    }
    set name(aString) {
      this._name = aString;
    }
    get country() {
      return this._country;
    }
    set country(aCountryCode) {
      this._country = aCountryCode;
    }
  }

  const organization = new Organization({
    name: "애크미 구스베리",
    country: "GB",
  });

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
