const fs = require('fs')
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = n.split(' ').map(Number);
const arr = input.map(i => i.split(''));

const dx = [1, -1, 0, 0]
const dy = [0, 0, -1, 1]

let visited = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false))

const BFS = (x, y) => {
  let q = []
  q.push([x, y])
  visited[x][y] = true

  let result = [0, 0]; // 늑대는 0번째, 양은 1번째

  if (arr[x][y] == 'v') {
    result[0] += 1
  } else {
    result[1] += 1
  }

  while (q.length > 0) {
    const [ci, cj] = q.shift()
    for (let i = 0; i < 4; i++) {
      const nx = ci + dx[i];
      const ny = cj + dy[i];

      if (0 <= nx && nx < N && 0 <= ny && ny < M && arr[nx][ny] !== '#' && visited[nx][ny] === false) {
        visited[nx][ny] = true
        q.push([nx, ny])
        if (arr[nx][ny] === 'v') result[0] += 1
        if (arr[nx][ny] === 'o') result[1] += 1
      }
    }
  }
  return result[1] > result[0] ? ['o', result[1]] : ['v', result[0]]
}

let answer = [0, 0]

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] !== '.' && arr[i][j] !== '#' && visited[i][j] === false) {
      const result = BFS(i, j);

      if (result[0] === 'o') {
        answer[0] += result[1]
      } else {
        answer[1] += result[1]
      }
    }
  }
}
console.log(answer[0], answer[1])