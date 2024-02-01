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
let result = [];

const dx = [-1, 1, 0, 0]; // 상, 하
const dy = [0, 0, -1, 1]; // 좌, 우
