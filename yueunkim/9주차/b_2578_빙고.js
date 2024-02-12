const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

// 철수의 빙고판
const bingopan = [];
for (let i = 0; i < 5; i++) {
  bingopan.push(input[i].split(" ").map(Number));
}

// 사회자가 부른 숫자
const mc = [];
for (let i = 5; i < 10; i++) {
  mc.push(...input[i].split(" ").map(Number));
}

let visited = Array.from({ length: 5 }, () => Array(5).fill(false));

// 빙고가 되기 위한 최소 숫자의 개수 = 12개
// 12번째부터는 빙고가 되는지도 판단

// 빙고 판단 함수
function solution() {
  let bingo = 0;

  // 가로줄
  for (let i = 0; i < 5; i++) {
    if (visited[i].every((e) => e === true)) {
      bingo++;
    }
  }

  // 세로줄
  for (let i = 0; i < 5; i++) {
    if (visited.every((row) => row[i] === true)) {
      bingo++;
    }
  }

  // 대각선줄
  if (visited.every((row, idx) => row[idx] === true)) {
    bingo++;
  }
  if (visited.every((row, idx) => row[4 - idx] === true)) {
    bingo++;
  }

  return bingo >= 3;
}

let count = 0;
for (let k = 0; k < 25; k++) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (bingopan[i][j] === mc[k]) {
        visited[i][j] = true;
        count++;
        if (count > 11 && solution()) {
          console.log(count);
          return;
        }
      }
    }
  }
}
