const fs = require("fs");
const path = require("path");

const start = new Date();

const readFile = (file, callback) => fs.readFile(file, "utf8", callback);
const writeFile = (file, data, callback) => fs.writeFile(file, data, callback);

const copyFileContent = (source, target) => {
  readFile(source, (err, data) => {
    writeFile(target, data, () => {
      console.log(
        `copy ${source} to ${target} elapsed ${new Date() - start} ms`
      );
    });
  });
};

copyFileContent(
  path.join("resources", "heavy_file.txt"),
  path.join("resources", "dump.txt")
);
copyFileContent(
  path.join("resources", "ligth_file.txt"),
  path.join("resources", "dump.txt")
);
console.log(`file end in ${new Date() - start} ms`);



