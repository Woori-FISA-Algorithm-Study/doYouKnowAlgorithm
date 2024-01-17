const input = require("fs")
  //   .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);

let result = [];
const moves = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

function bfs(length, [x, y], [xx, yy]) {
  let visited = Array.from(Array(length), () => Array(length).fill(false));
  const queue = [];
  queue.push([x, y, 0]);
  visited[x][y] = true;

  while (queue.length > 0) {
    let [x, y, count] = queue.shift();

    // 도착점에 도달하면 이동 횟수를 결과에 추가하고 종료
    if (x === xx && y === yy) {
      result.push(count);
      return;
    }

    for (let i = 0; i < moves.length; i++) {
      let nx = x + moves[i][0];
      let ny = y + moves[i][1];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < length &&
        ny < length &&
        visited[nx][ny] == false
      ) {
        queue.push([nx, ny, count + 1]);
        visited[nx][ny] = true;
      }
    }
  }
}

for (let i = 1; i <= n * 3 - 2; ) {
  let length = Number(input[i]);
  let [x, y] = input[i + 1].split(" ").map(Number);
  let [xx, yy] = input[i + 2].split(" ").map(Number);
  bfs(length, [x, y], [xx, yy]);
  i += 3;
}

console.log(result.join("\n"));
