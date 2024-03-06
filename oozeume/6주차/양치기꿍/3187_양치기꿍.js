const fs = require('fs')
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = n.split(' ').map(Number)
const arr = input.map(i => i.split(''))
let visited = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));

const dx = [1, -1, 0, 0]
const dy = [0, 0, -1, 1]

// 같은 울타리 안에 양 숫자 > 늑대숫자 이면 늑대가 잡아먹힘
// 같거나 작으면 양이 잡아먹힘
// 빈공간 .
// 울타리 #
// 늑대 v
// 양 k

const BFS = (x, y) => {
  let q = []
  q.push([x, y])
  visited[x][y] = true

  let result = { v: 0, k: 0 }; // 늑대는 0번째, 양은 1번째

  if (arr[x][y] == 'v') {
    result['v'] += 1
  } else {
    result['k'] += 1
  }

  while (q.length > 0) {
    const [ci, cj] = q.shift()
    for (let i = 0; i < 4; i++) {
      const nx = ci + dx[i];
      const ny = cj + dy[i];

      if (0 <= nx && nx < N && 0 <= ny && ny < M && arr[nx][ny] !== '#' && visited[nx][ny] === false) {
        visited[nx][ny] = true
        q.push([nx, ny])
        if (arr[nx][ny] === 'v') {
          result['v'] += 1
        } else if (arr[nx][ny] === 'k') {
          result['k'] += 1
        }
      }
    }
  }
  return result;
}

let answer = [0, 0]

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] !== '.' && arr[i][j] !== '#' && visited[i][j] === false) {
      const result = BFS(i, j);
      if (result['v'] >= result['k']) {
        answer[1] += result['v']
      } else {
        answer[0] += result['k']
      }
    }
  }
}

console.log(answer[0], answer[1]);