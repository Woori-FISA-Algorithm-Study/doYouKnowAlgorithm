const fs = require('fs');
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

const [M, N] = n.split(' ').map(Number);
let arr = input.map(i => i.split(' ').map(Number));

dx = [1, -1, 0, 0];
dy = [0, 0, -1, 1];

const bfs = () => {
  const q = [];
  let max = 0;

  // 익은 토마토의 위치를 모두 큐에 넣는다
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 1) {
        q.push([i, j, 0]); // 토마토의 위치와 시간을 함께 저장
      }
    }
  }

  while (q.length > 0) {
    const [x, y, day] = q.shift();

    // 현재 토마토가 익는데 걸리는 시간을 max에 저장
    max = Math.max(max, day);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny] === 0) {
        arr[nx][ny] = 1; // 토마토를 익게 한다
        q.push([nx, ny, day + 1]); // 다음 위치와 시간을 큐에 넣는다
      }
    }
  }

  // 모든 토마토가 익었는지 확인한다
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 0) {
        return -1;
      }
    }
  }

  return max;
};

console.log(bfs());
