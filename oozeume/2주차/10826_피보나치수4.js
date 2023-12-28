const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()

// num은 10,000보다 작거나 같은 자연수 또는 0
const num = Number(input)

let dp = Array.from({ length: num + 1 }, () => BigInt(0))
dp[1] = BigInt(1)

for (let i = 2; i <= num; i++) {
  dp[i] = dp[i - 2] + dp[i - 1]
}

console.log(dp[num].toString());

