const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);

function solution(n) {
  let dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1; // 2나 3으로 나누어 떨어지지 않을 경우를 위해
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1); // 1을 뺀 경우와 2로 나눈 경우 중 최소
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1); // 1을 뺀 경우와 3으로 나눈 경우 중 최소
  }
  return dp[n];
}

console.log(solution(n));
