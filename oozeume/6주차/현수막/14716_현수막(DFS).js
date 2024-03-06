const fs = require('fs');
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = n.split(' ').map(Number);
const arr = input.map(i => i.split(' ').map(Number));
let visited = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));

dx = [1, -1, 0, 0, 1, -1, 1, -1];
dy = [0, 0, -1, 1, 1, 1, -1, -1];

const DFS = (x, y) => {
  visited[x][y] = true;

  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny] && arr[nx][ny] === 1) {
      DFS(nx, ny);
    }
  }
};

let cnt = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && arr[i][j] === 1) {
      DFS(i, j);
      cnt += 1;
    }
  }
}

console.log(cnt);
