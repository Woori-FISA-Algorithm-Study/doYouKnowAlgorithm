const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]); // 집의 수

let fee = []; // 비용이 담긴 배열
for (let i = 1; i <= n; i++) {
  fee.push(input[i].split(" ").map(Number));
}

// 1. dp 배열 초기화
// 2. 첫째줄은 똑같이 넣어줌
// 3. dp[i][j] = i-1행 중에서 현재 dp[i][j]의 색을 제외한 비용들과 현재 비용의 합 중 가장 적은 비용
// 4. 마지막 줄에서 최소값 출력

function solution() {
  let dp = [fee[0]];
  for (let i = 1; i < n; i++) {
    const arr = new Array(3).fill(0);
    dp.push(arr);
  }

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.min(dp[i - 1][1] + fee[i][0], dp[i - 1][2] + fee[i][0]); // 빨강
    dp[i][1] = Math.min(dp[i - 1][0] + fee[i][1], dp[i - 1][2] + fee[i][1]); // 초록
    dp[i][2] = Math.min(dp[i - 1][0] + fee[i][2], dp[i - 1][1] + fee[i][2]); // 파랑
  }
  return Math.min(...dp[n - 1]);
}
console.log(solution(n, fee));
