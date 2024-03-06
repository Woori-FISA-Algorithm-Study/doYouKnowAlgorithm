const fs = require('fs')
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(n);
const arr = input.map((item) => item.split(' ').map(Number));
let dp = Array.from({ length: N }, () => Array(3).fill(0));

arr.unshift([0, 0, 0])
dp.unshift([0, 0, 0])

for (let i = 1; i <= N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2];
}

console.log(Math.min(...dp[N]));