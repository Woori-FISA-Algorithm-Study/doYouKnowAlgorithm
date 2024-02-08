const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim().split('\n').map(Number)

let [n, findNum] = input;

// 하, 우, 상, 좌
const dx = [1, 0, -1, 0]
const dy = [0, 1, 0, -1]
const direction = ['Bottom', 'Right', 'Top', 'Left'];

// 행렬 만들고
let arr = Array.from({ length: n }, () => Array(n).fill(0))
// 방문 처리
let visited = Array.from({ length: n }, () => Array(n).fill(false))

let startx = 0;
let starty = 0;
// 시작 위치 세팅
let [x, y] = [0, 0]
arr[x][y] = n * n
visited[x][y] = true;

let start = n;
let end = 3;

let answer = [0, 0]

arr[Math.floor(n / 2)][Math.floor(n / 2)] = 1;

while (start >= end) {
  for (let i = 0; i < 4; i++) {

    for (let j = 0; j < n - 1; j++) {

      let nx = x + dx[i]
      let ny = y + dy[i]

      if (visited[nx][ny] === false) {

        arr[nx][ny] = arr[x][y] - 1
        visited[nx][ny] = true;

        if (arr[nx][ny] === findNum) {
          answer[0] = nx + 1;
          answer[1] = ny + 1;
        }

        x = nx
        y = ny
      }
    }
  }
  start -= 2
  startx += 1;
  starty += 1;
}
for (let i = 0; i < n; i++) {
  console.log(arr[i].join(' '));
}
console.log(answer[0], answer[1]);