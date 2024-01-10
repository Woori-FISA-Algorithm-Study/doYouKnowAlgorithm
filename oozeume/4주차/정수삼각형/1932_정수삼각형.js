const fs = require('fs')
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(n);
const arr = input.map((item) => item.split(' ').map(Number));

let dp = Array.from({ length: N }, () => Array(N).fill(0))

dp[0][0] = arr[0][0]

for (let i = 1; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    dp[i][j] = Math.max(j - 1 >= 0 ? dp[i - 1][j - 1] : 0, dp[i - 1][j]) + arr[i][j]
  }
}

console.log(Math.max(...dp[N - 1]));