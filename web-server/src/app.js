const path = require("path");
const express = require("express");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));

app.get("/weather", (req, res) => {
  res.send({ forecast: "32", location: "Seoul" });
});

app.listen(3000, () => {
  console.log("Server is on 3000");
});
