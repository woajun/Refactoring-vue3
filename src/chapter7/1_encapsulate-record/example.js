const organization = { name: "애크미 구스베리", country: "GB" };

let result = "";
const newName = "유재석";

result += JSON.stringify(organization);

// 읽기 예
result += `<h1>${organization.name}</h1>`;

// 쓰기 예
organization.name = newName;

result += JSON.stringify(organization);

export default result;
