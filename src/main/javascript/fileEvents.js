const fs = require("fs");
const path = require("path");
const { EventEmitter } = require("events");

const emiter = new EventEmitter();
const start = new Date();

const readFile = (file) => {
  fs.readFile(file, "utf8", (err, data) => emiter.emit("readDone", data));
};
const writeFile = (file, data) => {
  fs.writeFile(file, data, (err, data) => emiter.emit("writeDone"));
};

const copyFileContent = (source, target) => {
  readFile(source);

  emiter.on("readDone", (data) => {
    writeFile(target, data);
  });

  emiter.on("writeDone", () => {
    console.log(`copy ${source} to ${target} elapsed ${new Date() - start} ms`);
  });
};




copyFileContent(
  path.join("resources", "ligth_file.txt"),
  path.join("resources", "dump.txt")
);
