const fs = require("fs");

function readFile(sPath) {
  return fs.readFileSync(sPath, "utf8");
}

module.exports = readFile;
