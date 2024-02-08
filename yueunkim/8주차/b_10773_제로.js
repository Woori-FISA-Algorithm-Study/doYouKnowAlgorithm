const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const k = +input[0];
let stack = [0];

function solution(k) {
  for (let i = 1; i <= k; i++) {
    if (+input[i] != 0) stack.push(+input[i]);
    else stack.pop();
  }

  return stack.reduce((a, b) => a + b);
}

console.log(solution(k));
