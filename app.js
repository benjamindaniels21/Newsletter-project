const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, function () {
  console.log("The server is running on port 3000");
});
