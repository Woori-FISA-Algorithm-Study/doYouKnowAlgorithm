const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number))

const [N, M] = input[0];
const arr = input[1]

// 일한 날이 연속해야하고, 최대 m일만 일할 수 있다.
// 일차원 배열로 주어짐, 연속하는 부분 수열, 최대값 찾기 --> 슬라이딩 윈도우 가능

// 1.초기 윈도우 값을 total 로 누적합 만든다
// 2.첫번째 윈도우로 만든 total 값을 max로 두고 비교하면서 max값 찾기

function solution(n, m, arr) {

  let total = 0
  for (let i = 0; i < m; i++) {
    total += arr[i]
  }
  let max = total;
  for (let j = 1; j < n - m; j++) {
    total = total - arr[j - 1] + arr[j + m - 1];
    max = Math.max(total, max)
  }
  return max
}

console.log(solution(N, M, arr));
