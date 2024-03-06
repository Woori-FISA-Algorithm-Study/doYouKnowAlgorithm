const fs = require('fs')
const n = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()

const N = Number(n);

let dp = Array.from({ length: N + 1 }, () => 0);

dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 2] + dp[i - 2] + dp[i - 1]) % 10007
}

console.log(dp[N]);

