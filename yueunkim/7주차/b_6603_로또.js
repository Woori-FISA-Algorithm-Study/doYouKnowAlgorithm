const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let output = [];
let selected = Array(14).fill(false); // 숫자의 사용 여부를 체크하는 배열

for (let i = 0; i < input.length - 1; i++) {
  let numbers = input[i].split(" ").map(Number);
  let n = numbers.shift();
  solution(0, n, numbers, 0);
  console.log(" ");
}

function solution(count, n, numbers, index) {
  // count = 현재까지 선택 수의 개수
  if (count === 6) {
    console.log(output.join(" "));
    return;
  }
  for (let i = index; i < n; i++) {
    // 아직 선택 안한 수라면
    if (!selected[i]) {
      selected[i] = true; // 숫자를 사용했다고 체크
      output.push(numbers[i]);
      solution(count + 1, n, numbers, i + 1);
      output.pop();
      selected[i] = false; // 선택 안한 상태로 만들어 다시 선택할 수 있도록
    }
  }
}
