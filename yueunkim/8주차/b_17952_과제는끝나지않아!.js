const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const stack = [];
let score = 0;

// 1. 1일 때 스택에 추가
// 2. 스택에서 과제를 하나씩 꺼내서 과제 수행(시간 감소)
// 3. 과제의 남은 시간이 0이면 스택에서 제거하고 최종 점수에 더해주기
// 4. 1-3까지 반복

for (let i = 1; i <= n; i++) {
  const [one, a, t] = input[i].split(" ").map(Number);

  // one이 1이면 스택에 추가
  if (one === 1) {
    stack.push([a, t]);
  }

  // 스택이 비어있지 않으면 과제 수행하고 시간 감소
  if (stack.length !== 0) {
    stack[stack.length - 1][1]--;

    // 과제 완료 시 스택에서 점수 추가 후 스택에서 제거
    if (stack[stack.length - 1][1] === 0) {
      score += stack[stack.length - 1][0];
      stack.pop();
    }
  }
}

console.log(score);
