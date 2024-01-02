const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = BigInt(input[0]);

// 피보나치 : i번째 = i-2번째 + i-1번째
// 피보나치 수열에서 특정 수로 나눈 나머지는 주기를 가지는데, 이를 피사노 주기라 함
// 피사노 주기는 모듈로 연산의 피연산자가 10^k일 때, 피사노 주기는 15*10^(k-1)이 됨
// 1000000으로 나눈 나머지이기 때문에 k가 6
// 따라서 피사노 주기는 15*10^(6-1) = 1500000

// 피사노 주기
const pisano = 1500000;
const mod = n % BigInt(pisano);

function solution(n) {
  const dp = new Array(pisano).fill(BigInt(0));
  dp[0] = BigInt(0);
  dp[1] = BigInt(1);
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % BigInt(1000000);
  }
  return dp[n];
}

console.log(solution(mod).toString());
