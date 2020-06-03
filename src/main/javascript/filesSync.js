const fs = require("fs");
const path = require("path");

const start = new Date();

const readFile = (file) => fs.readFileSync(file);
const writeFile = (file, data) => fs.writeFileSync(file, data);

const copyFileContent = (source, target) => {
  const content = readFile(source);
  writeFile(target, content);
  console.log(`copy ${source} to ${target} elapsed ${new Date() - start} ms`);
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


