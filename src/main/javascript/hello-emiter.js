const { EventEmitter } = require("events");

const emiter = new EventEmitter();

emiter.on("hello", () => console.log("world"));
emiter.emit("hello");
