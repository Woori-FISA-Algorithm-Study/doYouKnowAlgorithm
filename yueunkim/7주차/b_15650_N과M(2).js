const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);
let output = [];
let selected = Array(n + 1).fill(false); // 숫자의 사용 여부를 체크하는 배열
let result = "";

function solution(count, start) {
  // count = 현재까지 선택 수의 개수
  if (count === m) {
    result += `${output.join(" ")}\n`;
    return;
  }
  for (let i = start; i <= n; i++) {
    // 아직 선택 안한 수라면
    if (!selected[i]) {
      selected[i] = true; // 숫자를 사용했다고 체크
      output.push(i);
      solution(count + 1, i + 1);
      output.pop();
      selected[i] = false; // 선택 안한 상태로 만들어 다시 선택할 수 있도록
    }
  }
}

solution(0, 1);
console.log(result.trim());
