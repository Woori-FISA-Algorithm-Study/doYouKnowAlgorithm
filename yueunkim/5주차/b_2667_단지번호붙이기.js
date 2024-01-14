const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
let map = [];
for (let i = 1; i <= n; i++) {
  let row = input[i].split("").map(Number);
  map.push(row);
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
