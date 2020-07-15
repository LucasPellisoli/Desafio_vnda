const express = require("express");
const app = express();
var path = require("path");

app.use("/static", express.static(__dirname + "/src/dist/css"));
app.use("/static", express.static(__dirname + "/src/dist/assets/"));
app.use("/static", express.static(__dirname + "/src/dist/js"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/src/index.html"));
});

app.listen("3000", function () {
  console.log("server on:", "http://localhost:3000");
});
