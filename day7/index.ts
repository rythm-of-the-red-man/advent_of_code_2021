import fs from "fs";
let input = fs
  .readFileSync(`day7/input.txt`, "utf8")
  .split(",")
  .map((char) => parseInt(char));

console.log(Math.max(...input));

const fuelCostHashmap: { [key: number]: number } = {};
for (let i = 0; i <= Math.max(...input); i++) {
  let fuelCost = 0;
  for (let crab of input) {
    fuelCost += Math.abs(crab - i);
  }
  fuelCostHashmap[i] = fuelCost;
}
console.log(Math.min(...Object.values(fuelCostHashmap)));

const fuelCostHashmapGrow: { [key: number]: number } = {};
for (let i = 0; i <= Math.max(...input); i++) {
  let fuelCost = 0;
  for (let crab of input) {
    let steps = Math.abs(crab - i);
    for (let j = 1; j <= steps; j++) {
      fuelCost += j;
    }
  }
  fuelCostHashmapGrow[i] = fuelCost;
}
console.log(Math.min(...Object.values(fuelCostHashmapGrow)));
