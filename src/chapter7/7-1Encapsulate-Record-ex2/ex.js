export default () => {
  const organization = { name: "애크미 구스베리", country: "GB" };

  function print() {
    const newName = "토니 민수 제이슨";
    let result;
    result = `이름: ${organization.name}`;
    console.log(result);

    organization.name = newName;
    result = `이름: ${organization.name}`;
    console.log(result);
  }
  print();
};
