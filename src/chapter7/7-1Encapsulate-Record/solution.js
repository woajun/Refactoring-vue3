export default () => {
  class Organization {
    constructor(data) {
      this._data = data;
    }
  }

  const organization = new Organization({
    name: "애크미 구스베리",
    country: "GB",
  });

  function getRawDataOfOrganization() {
    return organization._data;
  }

  function print() {
    const newName = "토니 민수 제이슨";
    let result;
    result = `이름: ${getRawDataOfOrganization().name}`;
    console.log(result);

    organization.name = newName;
    result = `이름: ${getRawDataOfOrganization().name}`;
    console.log(result);
  }
  print();
};
