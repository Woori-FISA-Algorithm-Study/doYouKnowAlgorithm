const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const t = +input[0];
for (let i = 1; i <= t; i++) {
  let [n, m] = input[i].split(" ").map(Number);
  console.log(combination(n, m));
}

// // 팩토리얼 계산
// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// // 조합 계산
// function combination(n, m) {
//   return factorial(n) / (factorial(m) * factorial(n - m));
// }

// 조합 계산
function combination(n, m) {
  let result = 1;
  for (let i = 1; i <= m; i++) {
    result = (result * (n - m + i)) / i;
  }
  return result;
}
