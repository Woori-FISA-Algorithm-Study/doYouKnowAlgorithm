const fs = require('fs')
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(n);
const arr = input.map(i => i.split('').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = (arr, x, y, visited, N) => {
  q = []
  q.push([x, y])
  visited[x][y] = true
  let cnt = 1

  while (q.length > 0) {
    const [ci, cj] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = ci + dx[i]
      const ny = cj + dy[i]

      if (0 <= nx && nx < N && 0 <= ny && ny < N && arr[nx][ny] === 1 && visited[nx][ny] === false) {
        q.push([nx, ny])
        visited[nx][ny] = true;
        cnt += 1
      }
    }
  }
  return cnt
}

function solution(N, arr) {
  let visited = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
  let answer = []

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 1 && visited[i][j] === false) {
        answer.push(bfs(arr, i, j, visited, N));
      }
    }
  }
  answer = answer.sort((a, b) => a - b);
  return answer;
}

const answer = solution(N, arr);
console.log(answer.length);
for (x of answer) console.log(x);

