const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

// 피보나치 : i번째 = i-2번째 + i-1번째
// 90 피보나치 수는 '2,880,067,194,370,816,000'의 엄청 큰 수
// 하지만 javascript에 존재하는 한계점으로 인해 정확한 수를 표시할 수 없음
// BigInt 객체 형식으로 바꾸어 피보나치 수를 계산
// BigInt는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체
// 마지막 출력 단계에서 BigInt의 값을 진수로 표현시켜주는 내장 toString 메서드 사용

function solution(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
  }
  return dp[n].toString();
}

console.log(solution(n));
