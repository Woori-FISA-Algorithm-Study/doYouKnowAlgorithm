const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);

const output = [];
let result = "";

function solution(cnt) {
  if (cnt === m) {
    result += `${output.join(" ")}\n`;
    return;
  }
  for (let i = 1; i <= n; i++) {
    output.push(i);
    solution(cnt + 1);
    output.pop();
  }
}

solution(0);
console.log(result.trim());
