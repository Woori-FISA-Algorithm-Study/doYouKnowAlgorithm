const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const a = input[1].split(" ").map(Number);
const count = [1]; // 첫 번째 요소 10을 포함하는 LIS의 길이가 최소 1
let max = 1; // 전체 LIS의 최대 길이

function solution(n, a) {

  for (let i = 1; i < n; i++) {
    let subMax = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (a[j] < a[i]) {
        subMax = Math.max(subMax, count[j]);
      }
    }

    count[i] = subMax + 1;
    max = Math.max(max, count[i]);
  }
 
  return max
}

console.log(solution(n, a));
