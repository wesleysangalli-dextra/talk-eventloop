const axios = require("axios");
const path = require("path");
const fs = require("fs");

const start = new Date();

axios({
  method: "GET",
  url: "https://www.google.com",
  responseType: "text/html",
}).then(function (response) {
  console.log(response.headers);
  console.log(`e  lapsed: ${new Date() - start}`);
});

