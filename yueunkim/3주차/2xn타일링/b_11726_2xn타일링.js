const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);

// 1, 2, 3, 5, 8, 13 =>  i번째 = i-1번째 + i-2번째

function solution(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i < n + 1; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }
  return dp[n];
}

console.log(solution(n));
