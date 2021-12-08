import fs from "fs";
const input = fs.readFileSync("day5/input.txt", "utf8").split("\n");

const mappedInput: Array<Array<Array<number>>> = input.map((row) => {
  return row
    .split(" -> ")
    .map((rowItem) => rowItem.split(",").map((char) => parseInt(char)));
});
const coordsHashmap: { [key: string]: number } = {};

for (const row of mappedInput) {
  // this thing creates vertical and horizontal coords
  if (row[0][0] === row[1][0] || row[0][1] === row[1][1]) {
    let yStart = row[0][1] < row[1][1] ? row[0][1] : row[1][1]; // 0
    let yEnd = yStart === row[0][1] ? row[1][1] : row[0][1]; // 5
    // console.log(yStart, yEnd, xStart, xEnd)
    for (yStart; yStart <= yEnd; yStart++) {
      let xStart = row[0][0] < row[1][0] ? row[0][0] : row[1][0]; // 8
      let xEnd = xStart === row[0][0] ? row[1][0] : row[0][0]; // 8

      for (xStart; xStart <= xEnd; xStart++) {
        // console.log("coords", xStart, yStart);
        // coords.push([xStart, yStart]);
        if (coordsHashmap[`${xStart},${yStart}`]) {
          coordsHashmap[`${xStart},${yStart}`] += 1;
        } else {
          coordsHashmap[`${xStart},${yStart}`] = 1;
        }
      }
    }
  } else {
    // this thing creates diagonal coords
    let currentPoint = row[0];
    while (true) {
      if (coordsHashmap[`${currentPoint[0]},${currentPoint[1]}`]) {
        coordsHashmap[`${currentPoint[0]},${currentPoint[1]}`] += 1;
      } else {
        coordsHashmap[`${currentPoint[0]},${currentPoint[1]}`] = 1;
      }
      row[1][0] > currentPoint[0] ? currentPoint[0]++ : currentPoint[0]--;
      row[1][1] > currentPoint[1] ? currentPoint[1]++ : currentPoint[1]--;
      if (currentPoint.join("") === row[1].join("")) {
        if (coordsHashmap[`${currentPoint[0]},${currentPoint[1]}`]) {
          coordsHashmap[`${currentPoint[0]},${currentPoint[1]}`] += 1;
        } else {
          coordsHashmap[`${currentPoint[0]},${currentPoint[1]}`] = 1;
        }
        break;
      }
    }
  }
}
// this thing counts all coords with value larger than 1
let counter = 0;
for (let value of Object.values(coordsHashmap)) {
  if (value > 1) {
    counter += 1;
  }
}
console.log(counter);
