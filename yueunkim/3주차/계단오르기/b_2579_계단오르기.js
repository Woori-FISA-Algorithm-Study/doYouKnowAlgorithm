const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr = []; // 계단 점수 담긴 배열
arr.push(0);
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

// rule : 계단은 최대 두 칸씩 오를 수 있음, 마지막 계단은 반드시 포함

// 1. dp 배열 초기화 (각 요소 = i번째 계단에 오를 때까지 얻을 수 있는 최대값)
// 2. dp[1] = arr[1],   dp[2] = arr[1] + arr[2]
// 3. 3번째 칸부터는 두 가지 경우 중 최대값을 넣어줌

// ~ o x o o => dp[i - 3] + arr[i - 1] + arr[i]
//   ~ o x o => dp[i - 2] + arr[i]

// 즉, 최대 두 칸씩 오를 수 있음 = 두 번 연속으로 x는 오면 안 됨

function solution(n, arr) {
  const dp = new Array(n + 1).fill(0); // i번째 계단에 오를 때까지 얻을 수 있는 최대값
  dp[1] = arr[1];
  dp[2] = arr[1] + arr[2];

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
  }
  return dp[n];
}
console.log(solution(n, arr));
