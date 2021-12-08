import fs from "fs";
let total = 0;
for (let i = 0; i <= 256; i++) {
  let input = fs
    .readFileSync(`day6/gen${i}.txt`, "utf8")
    .split(",")
    .map((char) => parseInt(char));
  if (i === 0) {
    total += input.length;
  } else {
    total += input[0];
  }
}
console.log(total);
