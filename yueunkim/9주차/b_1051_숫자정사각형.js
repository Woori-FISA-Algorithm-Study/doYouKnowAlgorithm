const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
let square = [];
for (i = 1; i <= n; i++) {
  square.push(input[i].split("").map(Number));
}
let squareSize = [];

// 1. 정사각형 한 변의 길이는 1부터 n,m의 최솟값까지
// 2. 배열의 각 위치에서 해당 길이의 정사각형 만들어지면 넓이를 squareSize에 push
// 3. 최댓값 출력

for (let i = 1; i <= Math.min(n, m); i++) {
  for (let j = 0; j <= n - i; j++) {
    for (let k = 0; k <= m - i; k++) {
      let number = square[j][k];
      if (
        square[j][k + i - 1] === number &&
        square[j + i - 1][k] === number &&
        square[j + i - 1][k + i - 1] === number
      )
        squareSize.push(i * i);
    }
  }
}

if (squareSize.length > 0) console.log(Math.max(...squareSize));
else console.log(1);
