const readFile = require("./helpers/FileReader.js");
const sInput = readFile("./challenges/Day_3/input.txt");

const aRows = sInput.split("\n");
solveA(aRows);

function solveA(aInput) {
  let aDigits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < aInput.length; i++) {
    for (let j = 0; j < aInput[0].length; j++) {
      if (aInput[i][j] == 1) {
        aDigits[j]++;
      }
    }
  }

  let aBin = aDigits.map((a) => getBin(a));
  let nGamma = parseInt(aBin.join(""), 2);

  let nEpsilon = parseInt(getInverseBin(aBin), 2);

  console.log(nGamma, nEpsilon, nGamma * nEpsilon);
}

function getBin(nNum) {
  return nNum > 500 ? 1 : 0;
}

function getInverseBin(nBin) {
  return nBin.map((a) => (a == 0 ? 1 : 0)).join("");
}
