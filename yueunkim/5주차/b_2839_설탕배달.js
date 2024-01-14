const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);

// dp[i] = 무게가 i kg일 때의 최소 봉지 개수
function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 5 === 0) n -= 5;
    else n -= 3;
    answer++;
  }
  return n === 0 ? answer : -1;
}

console.log(solution(n));

// dp
function solution(n) {
  let dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 3; i <= n; i++) {
    if (i - 5 >= 0) {
      dp[i] = Math.min(dp[i], dp[i - 5] + 1);
    }
    if (i - 3 >= 0) {
      dp[i] = Math.min(dp[i], dp[i - 3] + 1);
    }
  }
  return dp[n] === Infinity ? -1 : dp[n];
}
