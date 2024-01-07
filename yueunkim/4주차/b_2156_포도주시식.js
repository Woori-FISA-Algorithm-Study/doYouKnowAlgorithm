const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]); // 포도주 잔의 개수
let wine = [0]; // 포도주
for (let i = 1; i <= n; i++) {
  wine.push(Number(input[i]));
}

// 규칙 : 3번 연속 마시기 불가, i번째에 마실 수도 있고 안 마실 수도 있음
// i번째에서 안 마심 => i번째의 최대값이 i-1번째와 같다는 것
// i번째에서 마심 => o x o o / o x o

// 1. dp 배열 초기화
// 2. dp[1] = wine[1],   dp[2] = Math.max(dp[1], wine[1] + wine[2], wine[2])
// 3. 3번째 칸부터는 세 가지 경우 중 최대값을 넣어줌

function solution(n, wine) {
  if (n === 1) return wine[1]; // 포도주 잔이 하나뿐인 경우
  const dp = new Array(n + 1).fill(0); // 각 요소 = i번째까지 마실 수 있는 포도주의 최대양
  dp[1] = wine[1];
  dp[2] = Math.max(dp[1], wine[1] + wine[2], wine[2]);

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
      dp[i - 1],
      dp[i - 2] + wine[i],
      dp[i - 3] + wine[i - 1] + wine[i]
    );
  }
  return Math.max(...dp);
}
console.log(solution(n, wine));
