const crypto = require("crypto");

const start = new Date();

const md5 = (data) => crypto.createHash("md5").update(data).digest("hex");
const sha256 = (data) => crypto.pbkdf2Sync(data, "salt", 100000, 256, "sha256");

new Promise((resolve, reject) => {
  resolve(sha256("Batata Frita").toString("hex"));
}).then((buff) =>
  console.log(`SHA256 elapsed ${new Date() - start} output = \n ${buff}`)
);

new Promise((resolve, reject) => {
  resolve(md5("Batata Frita"));
}).then((buff) =>
  console.log(`MD5 elapsed ${new Date() - start} output = \n ${buff}`)
);
