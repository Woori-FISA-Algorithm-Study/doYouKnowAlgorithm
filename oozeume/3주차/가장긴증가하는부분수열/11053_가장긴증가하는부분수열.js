const fs = require('fs')
const [n, input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(n);
const arr = input.split(' ').map(Number);
arr.unshift(0)

let dp = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) { // 비교 기준이 되는 요소 arr[i]
  let maxValue = 0; // 본인보다 앞에있는
  for (let j = 1; j < i; j++) { // 확인할 요소 arr[j]
    if (arr[j] < arr[i]) { // 내 이전까지 요소 중에 나보다 작은것들
      maxValue = Math.max(maxValue, dp[j]) // 그 중에서 가장 큰 개수수 구하기
    }
  }
  dp[i] = maxValue + 1 // +1 해서 누적
}
const answer = Math.max(...dp);
console.log(answer);