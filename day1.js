const readFile = require("./helpers/FileReader.js");
const sInput = readFile("./challenges/Day_1/input.txt");

const aRows = sInput.split("\n").map((a) => Number(a));
//console.log(solveA(aRows));
console.log(solveB(aRows));

function solveA(aInput) {
  let nIncrements = 0;
  for (let i = 1; i < aInput.length; i++) {
    if (aInput[i] > aInput[i - 1]) {
      nIncrements++;
    }
  }

  return nIncrements;
}

function solveB(aInput) {
  let nIncrement = 0;

  for (let i = 0; i < aInput.length - 3; i++) {
    let win1 = aInput[i] + aInput[i + 1] + aInput[i + 2];
    let win2 = aInput[i + 1] + aInput[i + 2] + aInput[i + 3];
    if (win1 < win2) {
      nIncrement++;
    }
  }

  return nIncrement;
}
