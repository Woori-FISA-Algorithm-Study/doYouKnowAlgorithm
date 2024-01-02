const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const t = Number(input[0]);
let number = []; // 테스트케이스 담는 배열
for (let i = 1; i <= t; i++) {
  number.push(Number(input[i]));
}

// 1, 1, 1, 2, 2, 3, 4, 5, 7, 9 =>  i번째 = i-2번째 + i-3번째

function solution(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = dp[2] = 1;

  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }
  return dp[n];
}

number.forEach((e) => console.log(solution(e))); // 테스트케이스 하나씩 넣어주고 값 출력
