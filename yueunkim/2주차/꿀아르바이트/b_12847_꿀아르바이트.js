const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const t = input[1].split(" ").map(Number); // 일급
let profit = []; // 얻을 수 있는 이익
let value = 0;

// 1. 초기값 = 처음부터 m개의 합
// 2. 슬라이딩 윈도우로 앞에 하나 빼고 뒤에 하나 더하기
// 3. 그 값을 profit에 push
// 4. 2,3번 반복
// 5. profit에서 가장 큰 값 출력

// 초기값
for (let i = 0; i < m; i++) {
  value += t[i];
}
profit.push(value);

for (let i = 0; i < n; i++) {
  if (i + m < n) {
    value -= t[i]; // 앞의 수 빼기
    value += t[i + m]; // 뒤의 수 더하기
    profit.push(value);
  }
}

console.log(Math.max(...profit));
