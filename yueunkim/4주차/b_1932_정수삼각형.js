const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]); // 삼각형의 크기
const intArr = []; // 정수 삼각형 담는 배열
for (let i = 1; i <= n; i++) {
  intArr.push(input[i].split(" ").map(Number));
}

// dp[i][j] = i행 j열에 도달했을 때의 최대 합

function solution(n, intArr) {
  let dp = [];
  for (let i = 1; i <= n; i++) {
    let arr = new Array(i).fill(0);
    dp.push(arr);
  }
  dp[0][0] = intArr[0][0];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      // 왼쪽 대각선으로 내려가는 경우
      if (j === 0) dp[i][j] = dp[i - 1][j] + intArr[i][j];
      // 오른쪽 대각선으로 내려가는 경우
      else if (j === i) dp[i][j] = dp[i - 1][j - 1] + intArr[i][j];
      // 왼쪽으로 내려온 경우와 오른쪽으로 내려온 경우 중 최대값
      else
        dp[i][j] = Math.max(
          dp[i - 1][j] + intArr[i][j],
          dp[i - 1][j - 1] + intArr[i][j]
        );
    }
  }
  // 합이 최대인 것 = 마지막 줄에서 최대값
  return Math.max(...dp[n - 1]);
}

console.log(solution(n, intArr));
