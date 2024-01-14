const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

let dp = new Array(n).fill(0);
dp[0] = numbers[0];
for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] + numbers[i], numbers[i]); // 이전까지의 연속합에 numbers[i]를 더한 값과 numbers[i] 중에서 더 큰 값을 선택
}

console.log(Math.max(...dp));
