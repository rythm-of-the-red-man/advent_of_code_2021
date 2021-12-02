import fs from "fs"
const input = fs.readFileSync("day2/input.txt", "utf8").split("\n").map(item => item.split(" "));

// Fist task
let x = 0;
let y = 0;

for (let entry of input){
    switch(entry[0]){
        case "forward":
            x+=parseInt(entry[1]);
            break;
        case "up":
            y-=parseInt(entry[1]);
            break;
        case "down":
            y+=parseInt(entry[1]);
            break;
        default:
            break
    }   
}
console.log(x, y, x*y);
// Second task
let x2 = 0;
let y2 = 0;
let aim=0;
for (let entry of input){
    switch(entry[0]){
        case "forward":
            x2+=parseInt(entry[1]);
            if (aim !== 0) {
                y2 += parseInt(entry[1]) * aim;
            }
            break;
        case "up":
            aim-=parseInt(entry[1]);
            break;
        case "down":
            aim+=parseInt(entry[1]);
            break;
        default:
            break;
    }   
}
console.log(x2, y2, x2*y2);
