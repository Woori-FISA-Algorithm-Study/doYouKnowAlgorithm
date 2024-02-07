const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const direction = input[1];
let count = 0;

for (let i = 0; i < direction.length - 1; i++) {
  if (direction[i] === "E" && direction[i + 1] === "W") {
    count++;
  }
}
console.log(count);
