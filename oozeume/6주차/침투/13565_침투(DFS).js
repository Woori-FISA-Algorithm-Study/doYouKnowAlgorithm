const fs = require('fs');
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = n.split(' ').map(Number);
const arr = input.map(i => i.split('').map(Number));
let visited = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const dfs = (x, y) => {
  if (x === N - 1) {
    return true;
  }

  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny] && arr[nx][ny] === 0) {
      if (dfs(nx, ny)) {
        return true;
      }
    }
  }

  return false;
};

let answer = [];

for (let i = 0; i < 1; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && arr[i][j] === 0) {
      const isElectric = dfs(i, j);
      answer.push(isElectric);
    }
  }
}

if (answer.includes(true)) {
  console.log("YES");
} else {
  console.log("NO");
}
