const fs = require("fs");
const input = fs.readFileSync("day1/input", "utf8").split("\n");
let higherCount = 0;
for (let i = 1; i < input.length ; i++) {
  if (input[i] > input[i - 1]) {
    higherCount++;
  }
  if(i<10)
  console.log(i, input[i], input[i-1],input[i] > input[i - 1]);
}
console.log(higherCount);

let windowSize = 3;
let windowHigherCount = 0;
let reference = 0;
for (let i = windowSize - 1; i < input.length; i += 1) {
  let windowSum = 0;
  let indicies = [];
  for (let j = 0; j < windowSize; j++) {
    indicies.push(i - j);
    windowSum += Number.parseInt(input[i - j]);
  }
  if (windowSum > reference && reference !== 0) {
    windowHigherCount++;
  }
  reference = windowSum;
}
console.log(windowHigherCount);
