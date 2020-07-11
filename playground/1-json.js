const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
let data = JSON.parse(dataJSON);
data.name = "Jay";
data.age = 23;

const newDataJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", newDataJSON);
