const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
let data = JSON.parse(dataJSON);
data.name = "Jay";
data.age = 23;

const newDataJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", newDataJSON);
