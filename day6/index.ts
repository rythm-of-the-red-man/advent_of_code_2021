import fs from "fs";
// slow as fuck 
for (let day = 0; day < 256; day++) {
  let newGeneration=0
  for (let gen = 0; gen <=day; gen++) {
    let input = fs
      .readFileSync(`day6/gen${gen}.txt`, "utf8")
      .split(",")
      .map((char) => parseInt(char));
    let end = input.length;
    if (gen > 0) {
      let fishAmount = input[0];
      let daysLeft = input[1];
      if(daysLeft === 0) {
          daysLeft = 6
          while (fishAmount > 0){
            newGeneration++
            fishAmount--
          }
      }else{
          daysLeft--;
      }
      fs.writeFileSync(`day6/gen${gen}.txt`, [input[0], daysLeft].join(","));
    } else {
      for (let fish = 0; fish < end; fish++) {
        if (input[fish] === 0) {
          input[fish] = 6;
          newGeneration++;
        } else {
          input[fish] = input[fish] - 1;
        }
      }
      fs.writeFileSync(`day6/gen${gen}.txt`, input.join(","));
    }
  }
  fs.writeFileSync(`day6/gen${day + 1}.txt`, [newGeneration, 8].join(','));
  console.log(day);
}
