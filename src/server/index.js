const dotenv = require("dotenv");
dotenv.config();

let projectData = {};

var path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mockAPIResponse = require("./mockAPI.js");
const aylien = require("aylien_textapi");

const app = express();
// const distPath = path.join(__dirname, "../..//dist");
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static("dist"));

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
  console.log("app listening on port 8082!");
});

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/test", (req, res) => {
  res.json({
    msg: "Hey!"
  });
});

// set API credentials

const alyienApi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.post("/save", function (req, res) {
  console.log(req.body);
  const parseUrl = req.body.url;
  console.log(parseUrl);
  if (alyienApi) {
    alyienApi.sentiment({
        url: parseUrl
      },
      (error, response) => {
        if (error === null) {
          console.log(response);
          res.json({
            msg1: response.polarity,
            msg2: response.polarity_confidence
          });
          // res.send(response);
        } else {
          const failedUrl = "Sorry There's an Error";
          res.json({
            message: failedUrl + " " + error
          });
          // res.send(error)
        }
      }
    );
  }
});