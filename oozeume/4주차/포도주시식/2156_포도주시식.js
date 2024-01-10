const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')


const N = Number(input.shift())
const arr = input.map(Number)
arr.unshift(0)

let dp = Array.from({ length: N }, () => 0);
dp.unshift(0)

dp[1] = arr[1]
dp[2] = arr[1] + arr[2]

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1];

  // if (dp[i] < dp[i - 2] + arr[i]) {
  //   dp[i] = dp[i - 2] + arr[i];
  // }

  // if (dp[i] < dp[i - 3] + arr[i] + arr[i - 1]) {
  //   dp[i] = dp[i - 3] + arr[i] + arr[i - 1];
  // }

  dp[i] = Math.max(dp[i - 3] + arr[i - 1] + arr[i], arr[i] + dp[i - 2], dp[i])
}

console.log(dp[N]);


// 처음에 계단오르기랑 비슷한 로직이라고 생각했음
// 비슷한 로직

