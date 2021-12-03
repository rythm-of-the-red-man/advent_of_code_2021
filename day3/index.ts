import fs from "fs";
const input = fs.readFileSync("day3/input.txt", "utf8").split("\n");
// Part 1
const rowsCount = input.length;
const rowLength = input[0].length;
const oneOccurances = Array(rowLength).fill(0);

for (let row of input) {
  for (let i = 0; i < row.length; i++) {
    if (row[i] === "1") {
      oneOccurances[i]++;
    }
  }
}
const gammaRateBinary = oneOccurances.map((occurancesCount) => {
  return occurancesCount > rowsCount / 2 ? 1 : 0;
});

const epsilonRateBinary = gammaRateBinary.map((bit) => {
  return bit === 1 ? 0 : 1;
});
const gammaRate = parseInt(gammaRateBinary.join(""), 2);
const epsilonRate = parseInt(epsilonRateBinary.join(""), 2);
console.log("Gamma rate", gammaRate);
console.log("Epsilon rate", epsilonRate);
console.log("Power consumption", gammaRate * epsilonRate);

// Part 2
let result = input;
let count = input.length;
for (let i = 0; i < rowLength; i++) {
  let ones = result.filter((row) => row[i] === "1");
  if (ones.length >= count/2) {
    result = ones;
  } else {
    result = result.filter((row) => row[i] === "0");
  }
  count = result.length;
  if (count === 1) {
    break;
  }
}
const oxygenerGenearatorRating = parseInt(result.join(""), 2);

console.log("Oxygene generator rating", oxygenerGenearatorRating);
result = input;
count = input.length;
for (let i = 0; i < rowLength; i++) {
  let zeros = result.filter((row) => row[i] === "0");
  if (zeros.length <= count/2) {
    result = zeros;
  } else {
    result = result.filter((row) => row[i] === "1");
  }
  count = result.length;
  if (count === 1) {
    break;
  }
}
const co2ScrubberRating = parseInt(result.join(""), 2);
console.log("CO2 scrubber rating", co2ScrubberRating);
console.log(co2ScrubberRating * oxygenerGenearatorRating)
