const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input.shift())
const list = []
for (let i = 0; i < input.length; i++) {
  list.push(input[i].split(' ').map(Number))
}

// 이중 for문이어야 하는 이유 -> 걸리는 일수를 고려해주기 위해서
//  i -> 처음부터 시작
//  j -> 걸리는 일수만큼 더해서 거기부터 누적합 계산
// 원래 자리에 있던 값, 기존에 있던 위치값 + 새로 더한 값 비교해서 max 값을 j에 세팅

function solution(N, list) {
  let dp = Array.from({ length: N + 1 }, () => 0)

  for (let i = 0; i < N; i++) {
    for (let j = i + list[i][0]; j <= N; j++) {
      dp[j] = Math.max(dp[j], dp[i] + list[i][1])
    }
  }
  return dp[N]
}

console.log(solution(N, list))

