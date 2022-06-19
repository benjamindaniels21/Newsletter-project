const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us18.api.mailchimp.com/3.0/01f0d7c1de";
  const options = {
    url: "https://us18.api.mailchimp.com/3.0/01f0d7c1de/lists/01f0d7c1de",
    method: "POST",
    headers: {
      Authorization: "auth 263d204b92bfe4c907931b91376d6707-us18",
    },
    body: jsonData,
  };

  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.listen(3000, function () {
  console.log("The server is running on port 3000");
});
