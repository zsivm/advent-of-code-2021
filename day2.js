const readFile = require("./helpers/FileReader.js");
const sInput = readFile("./challenges/Day_2/input.txt");

const aRows = sInput.split("\n");
console.log(solveA(aRows));
console.log(solveB(aRows));

function solveA(aInput) {
  let nDistance = 0,
    nDepth = 0;

  aInput.forEach((row) => {
    let aRowData = row.split(" ");
    let sDirection = aRowData[0],
      nAmount = Number(aRowData[1]);

    switch (sDirection) {
      case "forward":
        nDistance += nAmount;
        break;
      case "up":
        nDepth -= nAmount;
        break;
      case "down":
        nDepth += nAmount;
        break;
    }
  });

  return nDistance * nDepth;
}

function solveB(aInput) {
  let nDistance = 0,
    nDepth = 0,
    nAim = 0;

  aInput.forEach((row) => {
    let aRowData = row.split(" ");
    let sDirection = aRowData[0],
      nAmount = Number(aRowData[1]);

    switch (sDirection) {
      case "forward":
        nDistance += nAmount;
        nDepth += nAim * nAmount;
        break;
      case "up":
        nAim -= nAmount;
        break;
      case "down":
        nAim += nAmount;
        break;
    }
  });

  return nDistance * nDepth;
}
