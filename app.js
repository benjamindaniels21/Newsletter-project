const express = require("express");
const app = express();
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("The server is running on port 3000");
});
