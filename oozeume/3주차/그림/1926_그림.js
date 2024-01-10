const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const list = []
for (let i = 0; i < input.length; i++) {
  list.push(input[i].split(' ').map(Number))
}

function BFS(x, y, n, m, arr) {
  let q = [];
  arr[x][y] = 0;
  q.push([x, y]);

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, -1, 1];

  let cnt = 1

  while (q.length > 0) {
    const [ci, cj] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nx = ci + dx[i];
      const ny = cj + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 1) {
        q.push([nx, ny])
        arr[nx][ny] = 0
        cnt += 1;
      }
    }
  }

  return cnt;
}

function solution(n, m, arr) {
  let paintCnt = 0
  let maxCnt = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] == 1) {
        const result = BFS(i, j, N, M, arr)
        maxCnt = Math.max(maxCnt, result);
        paintCnt += 1
      }
    }
  }
  return paintCnt + '\n' + maxCnt

}

console.log(solution(N, M, list));