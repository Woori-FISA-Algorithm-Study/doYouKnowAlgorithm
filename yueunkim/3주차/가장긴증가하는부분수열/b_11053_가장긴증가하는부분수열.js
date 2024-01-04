const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const a = input[1].split(" ").map(Number);
let max = a[0];
let count = 0;

// function solution(n, a) {
//   const dp = Array(n).fill(0);
//   for (let i = 1; i < n; i++) {
//     if (max < a[i]) {
//       max = a[i];
//       count++;
//       console.log(max);
//     }
//   }
//   return count + 1;
// }

console.log(solution(n, a));
