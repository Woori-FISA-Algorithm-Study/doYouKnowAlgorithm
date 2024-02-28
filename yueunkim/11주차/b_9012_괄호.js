const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const t = +input[0];
for (let i = 1; i <= t; i++) {
  let string = input[i].split("");
  let vps = true;
  let stack = [];
  for (let j = 0; j < string.length; j++) {
    // ( 가 들어오면 (를 넣어줌
    if (string[j] === "(") stack.push("(");
    // )가 들어오면
    else {
      // 스택이 비어있을 때 들어오면
      if (stack.length === 0) {
        vps = false;
        break;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length !== 0) vps = false;
  vps ? console.log("YES") : console.log("NO");
}
