const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number)

const toNum = (num) => {
  return isNaN(num) ? 0 : num
}

const N = Number(input.shift());
const arr = input;

let dp = Array.from({ length: N }, () => 0);

if (N <= 2) {
  console.log(arr.reduce((acc, cur) => acc += cur, 0));
} else {
  dp[0] = arr[0];
  dp[1] = arr[0] + arr[1];
  dp[2] = Math.max(arr[0], arr[1]) + arr[2];

  for (let i = 3; i < N; i++) {
    dp[i] = Math.max(toNum(dp[i - 3] + arr[i - 1] + arr[i]), toNum(dp[i - 2] + arr[i]));
  }

  console.log(dp[N - 1]);
}


