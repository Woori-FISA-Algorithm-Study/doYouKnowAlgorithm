const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr = []; // 상담 일정 담긴 배열
for (let i = 1; i <= n; i++) {
  const [t, p] = input[i].split(" ").map(Number);
  arr.push([t, p]);
}
// console.log(arr); // [[3, 10], [5, 20], [1, 10] ... ]

// 1. dp 초기화
// 2. 각 일정을 period, profit에 담는다
// 3. 퇴사 전에 처리 불가하면 continue
// 4. 현재 상담을 수행했을 때 얻는 이익을 dp에 저장
// 5. 현재 상담을 수행하고 다음 상담을 수행했을 때의 이익과 이전에 계산된 이익 중에서 더 큰 이익을 dp에 저장

function solution(n, arr) {
  const dp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const [period, profit] = arr[i];

    if (i + period > n) continue;
    dp[i] = dp[i] + profit;

    // 현재 상담이 끝난 후부터 다음 상담까지 기간에 대해 반복
    for (let j = i + period; j < n; j++) {
      dp[j] = Math.max(dp[j], dp[i]);
    }
  }
  return Math.max(...dp);
}

console.log(solution(n, arr));
