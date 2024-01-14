const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

const dp = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  dp[i] = dp[i - 1] + numbers[i - 1];
}

let result = "";
for (let i = 2; i <= m + 1; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  result += dp[end] - dp[start - 1] + "\n"; // 결과를 문자열로 모음
}
console.log(result); // 한 번에 출력
