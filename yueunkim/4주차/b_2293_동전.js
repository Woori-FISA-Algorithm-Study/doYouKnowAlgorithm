const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, k] = input[0].split(" ").map(Number);

let coin = []; // 동전
for (let i = 1; i <= 3; i++) {
  coin.push(input[i]);
}

let count = 0;

// 점화식 모르겠음

function solution() {
  return count;
}
