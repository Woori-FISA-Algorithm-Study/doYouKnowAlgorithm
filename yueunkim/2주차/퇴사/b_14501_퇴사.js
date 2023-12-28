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

// let income = 0; // 총 금액
// let term = 0; // 상담하는데 걸리는 시간
// let allTerm = 0; // 상담하는데 걸리는 총 시간

// for (i = 0; i < n; ) {
//   term = arr[i][0];
//   allTerm += term;
//   if (allTerm <= n) {
//     income += arr[i][1];
//     i += term;
//   } else break;
// }

// console.log(income);
