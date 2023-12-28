const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, s] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
let answer = 0;

// 1. 부분 수열을 생성
// 2. 부분 수열의 요소를 모두 더하기
// 3. 그 합이 s면 answer +1

// i를 2진수로 바꾼 것 = 각 요소의 포함 여부
for (let i = 1; i < 2 ** n; i++) {
  let sum = 0;

  // 들어있는 요소는 sum에 더하기
  for (let j = 0; j < n; j++) {
    if (i & (2 ** j)) sum += numbers[j];
  }

  if (sum === s) answer++;
}

console.log(answer);
