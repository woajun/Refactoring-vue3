let tpHd = "untitled";

const obj = { articleTitle: "new Title" };

let result = "";
result += `<h1>${tpHd}</h1>`;
tpHd = obj["articleTitle"];

result += `${tpHd}`;
export default result;
