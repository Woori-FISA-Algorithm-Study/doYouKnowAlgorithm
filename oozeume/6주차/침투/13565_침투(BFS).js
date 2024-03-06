const fs = require('fs')
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = n.split(' ').map(Number);
const arr = input.map(i => i.split('').map(Number))
let visited = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (x, y) => {
  let q = []
  q.push([x, y])
  visited[x][y] = true;

  let answer = false;

  while (q.length > 0) {
    const [ci, cj] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nx = ci + dx[i]
      const ny = cj + dy[i]

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && visited[nx][ny] === false && arr[nx][ny] === 0) {
        if (nx === N - 1) {
          answer = true;
          return answer;
        }
        q.push([nx, ny])
        visited[nx][ny] = true

      }
    }
  }
  return answer;
}

let answer = []

for (let i = 0; i < 1; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j] === false && arr[i][j] === 0) {
      const isElectric = bfs(i, j)
      answer.push(isElectric)
    }
  }
}

if (answer.includes(true)) {
  console.log("YES");
} else {
  console.log("NO");
}

