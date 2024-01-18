const fs = require('fs')
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(n);

// 8방향
const dx = [-2, -2, -1, 1, 2, 2, 1, -1];
const dy = [-1, 1, 2, 2, 1, -1, -2, -2];

const bfs = (x, y, arr, N, tx, ty, visited) => {
  let q = [];
  q.push([x, y]);
  visited[x][y] = true

  while (q.length > 0) {
    const [ci, cj] = q.shift();
    for (let i = 0; i < 8; i++) {
      const nx = ci + dx[i]
      const ny = cj + dy[i]

      if (0 <= nx && nx < N && 0 <= ny && ny < N && visited[nx][ny] === false) {
        q.push([nx, ny])
        arr[nx][ny] = arr[ci][cj] + 1
        visited[nx][ny] = true

      }
    }
  }
  return arr[tx][ty]
}

for (let i = 0; i < N; i++) {
  const N = Number(input.shift());
  const [ci, cj] = input.shift().split(' ').map(Number);
  const [x, y] = input.shift().split(' ').map(Number);

  const board = Array.from({ length: N }, () => Array(N).fill(0));
  let visited = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === ci && j === cj && visited[i][j] === false) {
        const result = bfs(i, j, board, N, x, y, visited);
        console.log(result);
      }
    }
  }
}