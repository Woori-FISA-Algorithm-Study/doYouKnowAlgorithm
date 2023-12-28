const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, x] = input[0].split(" ").map(Number);
const visit = input[1].split(" ").map(Number); // 방문자 수
let visitNumbers = []; // x일 동안의 방문자 수 합
let value = 0;

// 1. 초기값 = 처음부터 x개의 합
// 2. 슬라이딩 윈도우로 앞에 하나 빼고 뒤에 하나 더하기
// 3. 그 값을 visitNumbers에 push
// 4. 2,3번 반복
// 5-1. visitNumbers에서 가장 큰 값이 0이면 SAD
// 5-2. 가장 큰 값이 0이 아니면 최대값과 개수 출력

// 초기값
for (let i = 0; i < x; i++) {
  value += visit[i];
}
visitNumbers.push(value);

for (let i = 0; i < n; i++) {
  if (i + x < n) {
    value -= visit[i]; // 앞의 수 빼기
    value += visit[i + x]; // 뒤의 수 더하기
    visitNumbers.push(value);
  }
}

let max = Math.max(...visitNumbers); // 최대값
if (max === 0) {
  console.log("SAD");
} else {
  let count = visitNumbers.reduce((cnt, e) => cnt + (max === e), 0); //최대값 개수
  console.log(max + "\n" + count);
}
