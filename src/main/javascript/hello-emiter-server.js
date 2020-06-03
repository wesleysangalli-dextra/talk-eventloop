const { EventEmitter } = require("events");
const express = require("express");
const app = express();

const emiter = new EventEmitter();
emiter.on("hello", () => console.log("world"));

app.get("/hello", function (req, res) {
  console.log("New request to /hello")
  emiter.emit("hello");
  res.send(`GET on ${req.url}`);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
