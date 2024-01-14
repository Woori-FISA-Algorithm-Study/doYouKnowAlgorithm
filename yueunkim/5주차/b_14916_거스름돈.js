const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);

function solution(n) {
  let answer = 0;
  while (n > 0) {
    if (n % 5 === 0) n -= 5;
    else n -= 2;
    answer++;
  }
  return n === 0 ? answer : -1;
}

console.log(solution(n));
