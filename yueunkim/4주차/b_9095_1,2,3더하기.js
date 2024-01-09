const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const t = Number(input[0]);
let n = [];
for (let i = 1; i <= t; i++) {
  n.push(Number(input[i]));
}

// dp[1] = 1 (1)
// dp[2] = 2 (1+1, 2)
// dp[3] = 4 (1+1+1, 1+2, 2+1, 3)
// dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]

let dp = [0, 1, 2, 4];

for (let i = 4; i <= 11; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

n.forEach((i) => console.log(dp[i]));
