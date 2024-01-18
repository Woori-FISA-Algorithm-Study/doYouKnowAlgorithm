const fs = require('fs')
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')


const [N, M] = n.split(' ').map(Number);
const arr = input.map(i => i.split(' ').map(Number));

const dx = [-1, 1, 0, 0, -1, -1, 1, 1]
const dy = [0, 0, -1, 1, -1, 1, -1, 1]

let sharkq = []
// 상어가 있는 좌표가 담긴 배열을 만든다.
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 1) {
      sharkq.push([i, j])
    }
  }
}

const BFS = () => {
  while (sharkq.length > 0) {
    const [ci, cj] = sharkq.shift();
    for (let i = 0; i < 8; i++) {
      const nx = ci + dx[i];
      const ny = cj + dy[i];

      if (0 <= nx && nx < N && 0 <= ny && ny < M && arr[nx][ny] === 0) {
        sharkq.push([nx, ny]);
        arr[nx][ny] = arr[ci][cj] + 1
      }
    }
  }
}

BFS()
let dist = -1
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    // 거리계산해서 max거리만 담기 
    dist = Math.max(arr[i][j], dist)
  }
}

console.log(dist - 1);